/* ======================================================================
   سفريات — ملف الإعدادات الخاص بك
   ----------------------------------------------------------------------
   ✅ هذا هو الملف الوحيد الذي تعدّله لربط تطبيقك.
   ✅ عند تحديث index.html لاحقاً لن تفقد هذه الإعدادات — تبقى هنا محفوظة.
   ✅ ضع قيمك بين علامتي التنصيص "" ثم احفظ وارفع الملف.
   ====================================================================== */
window.SAFARIYAT_CONFIG = {

  // 1) رابط Google Apps Script بعد النشر (Deploy → Web app → /exec)
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxLQ8sRJjaQfArRr-dyULfNc_wl7jckPO1DWVAQofXLygFzTxh02BDuVldYQ1snW2zu/exec",

  // 2) رابط خادم الترخيص (نفس رابط Apps Script عادةً، أو اتركه فارغاً)
  LICENSE_URL: "https://script.google.com/macros/s/AKfycbxLQ8sRJjaQfArRr-dyULfNc_wl7jckPO1DWVAQofXLygFzTxh02BDuVldYQ1snW2zu/exec",

  // 3) Google Sign-In Client ID من Google Cloud Console
  //    (OAuth Client ID → Web application → ...apps.googleusercontent.com)
  GOOGLE_CLIENT_ID: "974858628584-0nfgjcecc9f6f6e4u9kmqh92k9r56tu9.apps.googleusercontent.com",

  // 4) مفاتيح ZainCash للمحفظة (بعد التعاقد مع زين كاش)
  ZAINCASH_MERCHANT_ID: "",
  ZAINCASH_SECRET: "",

  // 5) بريد مدير النقل / مسؤول الكراج (شريكك) — عند دخوله بهذا البريد
  //    تُفتح له لوحة الكراج تلقائياً (سائقوه + رحلاته + حصّته من الأرباح)
  TRANSPORT_MANAGER_EMAIL: "",

  // 5-أ) 👑 بريد المدير العام (أعلى صلاحية — واحد فقط، وهو صاحب التطبيق)
  ADMIN_EMAIL: "eng.23power@gmail.com",

  // 5-ب) 👔 موظفو الإدارة — أكثر من بريد واحد
  //      اكتبهم داخل القوسين المربّعين، كل بريد بين علامتي تنصيص ومفصولاً بفاصلة ,
  //      آخر بريد في القائمة بلا فاصلة بعده. مثال كامل:
  //
  //      ADMIN_EMAILS: [
  //        "employee1@gmail.com",
  //        "employee2@gmail.com",
  //        "employee3@gmail.com"
  //      ],
  //
  //      عند دخول أيٍّ منهم بحساب Google تُفتح له لوحة الإدارة تلقائياً.
  //      ملاحظة: تعديل النِسَب ووسائل الدفع وإطفاء الوحدات تبقى للمدير العام وحده.
  //      ويمكنك أيضاً إضافتهم من داخل التطبيق: لوحة المدير ← 👔 موظفو الإدارة
  //      (الإضافة من داخل التطبيق تتزامن على كل الأجهزة بلا تعديل هذا الملف).
  ADMIN_EMAILS: [
    ""
  ],

  // 6) Firebase Realtime للتتبّع اللحظي بين السائق والزبون (اختياري)
  //    اتركه فارغاً ليعمل التتبّع عبر Google Apps Script (تحديث كل ~10ث).
  //    لتفعيل التتبّع اللحظي: أنشئ مشروع Firebase وضع رابط قاعدة البيانات هنا.
  FIREBASE_URL: "",
  FIREBASE_API_KEY: "",

  // 7) رابط التطبيق العام (لمشاركة الرحلة مع العائلة) — مثال: https://you.github.io/safariyat/
  APP_PUBLIC_URL: "",

  // 8) WhatsApp Business API للإرسال التلقائي الجماعي (اختياري)
  //    اتركه فارغاً لتعمل روابط wa.me المباشرة (مجانية، بضغطة يدوية).
  //    للإرسال التلقائي: ضع رابط مزوّدك (Twilio/Meta) والتوكن.
  WHATSAPP_API_URL: "",
  WHATSAPP_API_TOKEN: "",

  // 8-أ) 🤖 المساعد الذكي للزبون
  //      يعمل افتراضياً بذكاء محلي كامل بلا إنترنت (أسعار، حجز، دفع، ملاحة، سياحة، مشاكل).
  //      وإن أردت ربط ذكاء اصطناعي خارجي للأسئلة الحرّة، ضع رابط خدمتك هنا.
  //      الخدمة تستقبل POST فيه { q, lang, app, version } وترجع { answer: "..." }
  AI_API_URL: "",

  // 9) معلومات المطوّر (تظهر في صفحة الحساب)
  //    يمكنك إخفاء أيٍّ منها لاحقاً من داخل التطبيق:
  //    لوحة المدير ← 🙈 إظهار معلومات المطوّر (تُخفى عن الجميع بلا حذف من هنا)
  DEVELOPER_FB: "",
  DEVELOPER_NAME: "أ.م. أحمد الربيعي للحلول الهندسية",
  DEVELOPER_ADDRESS: "",
  DEVELOPER_PHONE: ""

};
