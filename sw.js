const CACHE_NAME = 'safariyat-cache-v10';
const OFFLINE_URL = 'offline.html';

// نحاول تخزين هذه الملفات، وإن غاب أحدها لا يفشل التثبيت
const CACHED_FILES = [
  'index.html',
  'config.js',
  'manifest.json',
  'offline.html',
  'assets/icon-144.png',
  'assets/icon-180.png',
  'assets/icon-192.png',
  'assets/icon-256.png',
  'assets/icon-384.png',
  'assets/icon-512.png',
  'assets/icon-192-maskable.png',
  'assets/icon-512-maskable.png'
];

// تثبيت: خزّن ملفات القشرة (كلٌّ على حدة حتى لا يفشل الكل بسبب ملف مفقود)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.all(CACHED_FILES.map(f =>
        cache.add(f).catch(() => null)
      ))
    )
  );
  self.skipWaiting();
});

// استراتيجية الجلب:
// - صفحات التنقّل و index.html و config.js: الشبكة أولاً (حتى تصل التحديثات فوراً)،
//   وعند انقطاع الشبكة فقط نرجع للنسخة المخزّنة ثم صفحة عدم الاتصال.
// - باقي الطلبات (بما فيها خرائط Leaflet من الإنترنت): الشبكة مباشرة، مع تخزين احتياطي.
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  const isPage = req.mode === 'navigate' ||
                 url.pathname.endsWith('/index.html') ||
                 url.pathname.endsWith('/config.js');

  if (isPage) {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() =>
          caches.match(req).then(r => r || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // طلبات خارجية (خرائط، أيقونات ثلاثية الأبعاد، خطوط): الشبكة أولاً مع تخزين احتياطي
  // حتى تعمل الأيقونات والخرائط دون إنترنت بعد أول تحميل
  if (url.origin !== self.location.origin) {
    event.respondWith(
      fetch(req).then(res => {
        if (res && res.ok && req.method === 'GET') {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // ملفات محلية أخرى: المخزّن ثم الشبكة
  event.respondWith(
    caches.match(req).then(res => res || fetch(req).then(r => {
      const copy = r.clone();
      caches.open(CACHE_NAME).then(c => c.put(req, copy)).catch(() => {});
      return r;
    }).catch(() => undefined))
  );
});

// تفعيل: احذف النسخ القديمة وتحكّم بكل الصفحات فوراً
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(c => c !== CACHE_NAME).map(c => caches.delete(c))))
      .then(() => self.clients.claim())
  );
});
