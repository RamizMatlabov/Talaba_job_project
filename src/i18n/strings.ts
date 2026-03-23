import { defaultLocale, isLocale, type Locale } from "./locales";

// Flat keys for predictable lookups (no reflection/magic).
const STRINGS: Record<Locale, Record<string, string>> = {
  uz: {
    "nav.home": "Bosh sahifa",
    "nav.jobs": "Ishlar",
    "nav.employers": "Ish beruvchilar",
    "nav.about": "Biz haqimizda",
    "nav.openMenu": "Menyu",
    "nav.cta.jobs": "Ishlarni ko‘rish",
    "nav.cta.apply": "Ro‘yxatdan o‘tish",
    "nav.language": "Til",

    "footer.quickLinks": "Tezkor havolalar",
    "footer.contact": "Aloqa",
    "footer.tagline":
      "O‘zbekiston talabalari uchun qisman bandlik, staj va boshlang‘ich karyera imkoniyatlari.",
    "footer.badge": "Demo MVP · inkubator taqdimoti",
    "footer.copyright": "Barcha huquqlar himoyalangan.",
    "footer.location": "Samarqand, O‘zbekiston",
    "footer.link.apply": "Ariza",

    "filters.search.sr": "Qidiruv",
    "filters.search.placeholder": "Lavozim yoki kompaniya bo‘yicha qidiring",
    "filters.jobType.label": "Ish turi",
    "filters.city.label": "Hudud",
    "filters.jobType.all": "Barchasi",
    "filters.jobType.Part-time": "Part-time",
    "filters.jobType.Internship": "Staj",
    "filters.jobType.Remote": "Remote",
    "filters.jobType.Full-time": "To‘liq stavka",
    "filters.city.all": "Barcha shaharlar",
    "filters.city.Toshkent": "Toshkent",
    "filters.city.Samarqand": "Samarqand",
    "filters.city.Buxoro": "Buxoro",
    "filters.city.Farg‘ona": "Farg‘ona",
    "filters.city.Onlayn": "Onlayn",

    "jobsListing.noResults.title": "Hech narsa topilmadi",
    "jobsListing.noResults.description":
      "Filtrlarni o‘zgartiring yoki boshqa kalit so‘z bilan qidirib ko‘ring.",

    "jobCard.apply": "Ariza berish",
    "jobCard.details": "Batafsil",

    "apply.title.brand": "TalabaJob",
    "apply.title.forJob": "Ushbu vakansiyaga ariza",
    "apply.title.default": "Ro‘yxatdan o‘tish / Ariza",
    "apply.subtitle": "Maydonlarni to‘ldiring — jamoamiz siz bilan bog‘lanadi.",
    "apply.questions": "Savollar bormi?",
    "apply.questions.aboutLink": "Biz haqimizda",

    "apply.thanks.title": "Rahmat!",
    "apply.thanks.body": "Arizangiz yuborildi. Tez orada siz bilan bog‘lanamiz.",
    "apply.thanks.backToJobs": "Ishlar ro‘yxatiga qaytish",

    "apply.form.fullName": "To‘liq ism familiya",
    "apply.form.phone": "Telefon raqami",
    "apply.form.telegram": "Telegram username",
    "apply.form.university": "Oliy ta’lim muassasasi",
    "apply.form.message": "Qisqa xabar",
    "apply.form.cv": "CV (demo)",

    "apply.form.placeholder.fullName": "Masalan: Aziza Karimova",
    "apply.form.placeholder.phone": "+998 __ ___ __ __",
    "apply.form.placeholder.telegram": "@username",
    "apply.form.placeholder.university":
      "Masalan: Toshkent davlat iqtisodiyot universiteti",
    "apply.form.placeholder.message": "O‘zingiz va qiziqishingiz haqida qisqacha yozing",
    "apply.form.cv.filePicker": "Fayl tanlang",
    "apply.form.cv.dropHint": "yoki bu yerga torting",
    "apply.form.cv.helper": "PDF yoki Word — max. 5 MB (demo rejim)",

    "apply.form.submit": "Yuborish",
    "apply.form.submitting": "Yuborilmoqda…",

    "home.hero.pill": "Talabalar uchun ish platformasi",
    "home.hero.title": "Talabalar uchun ish topish platformasi",
    "home.hero.description":
      "Part-time ishlar, stajirovkalar va junior imkoniyatlar bir joyda — moslashuvchan grafik, tekshirilgan ish beruvchilar va bir marta bosish bilan ariza.",
    "home.hero.stats.students": "Talabalar",
    "home.hero.stats.jobs": "Vakansiyalar",
    "home.hero.stats.partners": "Hamkorlar",
    "home.hero.opportunities": "Bugungi imkoniyatlar",
    "home.hero.tag.new": "Yangi",
    "home.hero.tag.shiftPrefix": "Smena",
    "home.hero.bottom.oneClick": "Bir marta bosish — ariza yuborildi",
    "home.hero.bottom.response": "Tez javob, shaffof jarayon",

    "home.features.1.title": "Talabaga mos ishlar",
    "home.features.1.description":
      "Dars jadvaliga mos smenalar, qisman bandlik va stajlar — barchasi bir joyda filtrlangan.",
    "home.features.2.title": "Bir marta bosish — ariza",
    "home.features.2.description":
      "Profilni bir marta to‘ldirib, sevimli vakansiyalarga tez ariza yuborishingiz mumkin.",
    "home.features.3.title": "Stajrovlari va junior rollar",
    "home.features.3.description":
      "Karyera boshlanishi uchun real loyihalar, mentorlik va portfolio uchun imkoniyatlar.",
    "home.features.4.title": "Tekshirilgan ish beruvchilar",
    "home.features.4.description":
      "Hamkorlarimizni tekshiramiz va talabalar uchun xavfsiz, shaffof jarayonni qo‘llab-quvvatlaymiz.",

    "home.steps.1.step": "01",
    "home.steps.1.title": "Ishlarni qidiring",
    "home.steps.1.text":
      "Lavozim, shahar va ish turini tanlang — natijalar soniyalar ichida.",
    "home.steps.2.step": "02",
    "home.steps.2.title": "Oson ariza",
    "home.steps.2.text": "Qisqa forma va CV yuklash — ortiqcha bosqichlarsiz.",
    "home.steps.3.step": "03",
    "home.steps.3.title": "Aloqa va suhbat",
    "home.steps.3.text":
      "Ish beruvchi tez orada siz bilan bog‘lanadi va keyingi qadamni belgilaydi.",

    "home.section.problem.eyebrow": "Muammo",
    "home.section.problem.title":
      "Talabalar uchun mos ish topish hali ham murakkab",
    "home.section.problem.description":
      "Dars, loyihalar va shaxsiy vaqt o‘rtasida muvozanat saqlash oson emas. Ko‘p e’lonlar to‘liq stavka yoki tajriba talab qiladi, smenalar esa dars jadvaliga mos kelmaydi.",
    "home.section.approach.label": "TalabaJob yondashuvi",
    "home.section.approach.title":
      "Moslashuvchan grafik, aniq e’lonlar va karyera boshlanishi uchun stajlar",
    "home.section.approach.bullet.1": "Part-time va stajlar uchun alohida filtr",
    "home.section.approach.bullet.2": "Onlayn va gibrid imkoniyatlar",
    "home.section.approach.bullet.3": "Ish beruvchilar bilan shaffof aloqa",

    "home.section.opportunities.eyebrow": "Imkoniyatlar",
    "home.section.opportunities.title": "Nima uchun TalabaJob?",
    "home.section.opportunities.description":
      "Talabalar va yangi mutaxassislar uchun platforma — sodda, tez va ishonchli.",

    "home.section.process.eyebrow": "Jarayon",
    "home.section.process.title": "Qanday ishlaydi?",
    "home.section.process.description":
      "Uchta oddiy qadam — keyin esa sizning karyerangiz boshlanishi.",

    "home.section.selected.eyebrow": "Tanlangan",
    "home.section.selected.title": "Mashhur vakansiyalar",
    "home.section.selected.description":
      "Hozirgi haftada talabalar uchun eng ko‘p ko‘rilgan ishlar.",
    "home.section.selected.allJobs": "Barcha ishlar",

    "home.section.start.eyebrow": "Boshlash",
    "home.section.start.title": "Karyerangizni bugun boshlang",
    "home.section.start.description":
      "Minglab talaba kabi siz ham mos ish va staj toping — bir daqiqada ro‘yxatdan o‘ting.",
    "home.section.start.cta.jobs": "Ishlarni ko‘rish",
    "home.section.start.cta.apply": "Ro‘yxatdan o‘tish",

    "section.jobs.eyebrow": "Vakansiyalar",
    "section.jobs.title": "Talabalar uchun ish va stajlar",
    "section.jobs.description":
      "Filtrlardan foydalaning — lavozim, ish turi va shahar bo‘yicha qidiring. Barcha e’lonlar demo ma’lumot.",

    "section.employers.eyebrow": "Hamkorlik",
    "section.employers.heroTitle": "Nima uchun TalabaJob?",
    "section.employers.heroDescription":
      "Talabalar va yosh mutaxassislar bilan bog‘lanishni soddalashtiramiz — siz esa jamoani tezroq to‘ldirasiz.",

    "employers.benefit.1.title": "Yosh talentga chiqish",
    "employers.benefit.1.description":
      "Motivatsiyali talabalar va yangi mutaxassislar — startap va o‘rta biznes uchun ideal.",
    "employers.benefit.2.title": "Tezroq yollash",
    "employers.benefit.2.description":
      "Aniq filtrlar va tayyor profillar — suhbatga vaqt tejalmaydi.",
    "employers.benefit.3.title": "Talabaga fokusli auditoriya",
    "employers.benefit.3.description":
      "E’lonlaringiz part-time va staj qidirayotgan talabalarga to‘g‘ri boradi.",

    "employers.cta.label": "Hamkorlik",
    "employers.cta.title": "Vakansiyangizni joylashtiring",
    "employers.cta.description":
      "Demo uchun tugmani bosing — keyingi bosqichda siz bilan bog‘lanamiz va e’lonni birgalikda yaratamiz.",
    "employers.cta.button": "Vakansiya joylash",

    "about.eyebrow": "Startup haqida",
    "about.title": "TalabaJob — ertaga ishlaydigan platforma",
    "about.description":
      "Biz inkubator dasturida boshlangan jamoamiz — maqsadimiz talabalarga mos, shaffof va zamonaviy ish topish tajribasini yaratish.",
    "about.story.title": "Bizning hikoyamiz",
    "about.story.body":
      "TalabaJob g‘oyasi oddiy kuzatuvdan tug‘ilgan: darslar va ish o‘rtasida muvozanat qidirayotgan ko‘plab talabalar uchun mos vakansiyalar hali ham tarqilgan va noaniq. Biz bu bo‘shliqni yopish — bir joyda qidiruv, filtrlash va ishonchli ish beruvchilar bilan bog‘lanish uchun platforma yaratmoqdamiz.",
    "about.mission.title": "Missiya",
    "about.mission.body":
      "O‘zbekiston talabalariga moslashuvchan ish, staj va boshlang‘ich karyera imkoniyatlarini oson va tushunarli qilib yetkazish.",
    "about.vision.title": "Vizyon",
    "about.vision.body":
      "Mamlakat bo‘ylab yoshlar va ish beruvchilar o‘rtasidagi eng ishonchli va zamonaviy bog‘lanish platformasiga aylanish.",
    "about.demoMode.label": "Demo rejim:",
    "about.demoMode.body":
      "TalabaJob hozircha MVP — ma’lumotlar namuna, backend integratsiyasi keyingi bosqichda.",
    "about.cta.button": "Ishlarni ko‘rish",

    "jobDetail.backToJobs": "Ishlar ro‘yxatiga qaytish",
    "jobDetail.applyNow": "Hozir ariza berish",
    "jobDetail.otherJobs": "Boshqa ishlar",
    "jobDetail.section.description": "Tavsif",
    "jobDetail.section.responsibilities": "Vazifalar",
    "jobDetail.section.requirements": "Talablar",
    "jobDetail.section.benefits": "Afzalliklar",

    "jobNotFound.title": "Vakansiya topilmadi",
    "jobNotFound.description":
      "Ushbu e’lon mavjud emas yoki olib tashlangan bo‘lishi mumkin.",
    "jobNotFound.backToJobs": "Ishlar ro‘yxatiga qaytish",

    // Tags shown inside UI.
    "tags.Flexible": "Flexible",

    "metadata.home.title.default": "TalabaJob — talabalar uchun ish va staj platformasi",
    "metadata.home.title.template": "%s | TalabaJob",
    "metadata.home.description":
      "O‘zbekiston talabalari uchun part-time ishlar, stajirovkalar va junior imkoniyatlar. Bir joyda qidiring, tez ariza qiling.",

    "metadata.jobs.title": "Ishlar ro‘yxati",
    "metadata.jobs.description":
      "Part-time, staj, remote va to‘liq stavka bo‘yicha vakansiyalar — Toshkent, Samarqand, Buxoro, Farg‘ona va onlayn.",

    "metadata.employers.title": "Ish beruvchilar uchun",
    "metadata.employers.description":
      "Yosh talentlarga chiqing — TalabaJob orqali tezroq yollash va talabalarga mos vakansiyalar.",

    "metadata.about.title": "Biz haqimizda",
    "metadata.about.description":
      "TalabaJob — O‘zbekistonda talabalar va ish imkoniyatlari o‘rtasidagi ko‘prik.",

    "metadata.apply.title": "Ariza",
    "metadata.apply.description": "TalabaJob — tez va oson ariza formasi.",

    "metadata.job.notFound.title": "Topilmadi",
  },
  en: {
    "nav.home": "Home",
    "nav.jobs": "Jobs",
    "nav.employers": "Employers",
    "nav.about": "About",
    "nav.openMenu": "Menu",
    "nav.cta.jobs": "View jobs",
    "nav.cta.apply": "Apply",
    "nav.language": "Language",

    "footer.quickLinks": "Quick links",
    "footer.contact": "Contact",
    "footer.tagline":
      "Part-time, internships, and entry-level career opportunities for students in Uzbekistan.",
    "footer.badge": "Demo MVP · incubator presentation",
    "footer.copyright": "All rights reserved.",
    "footer.location": "Samarkand, Uzbekistan",
    "footer.link.apply": "Apply",

    "filters.search.sr": "Search",
    "filters.search.placeholder": "Search by position or company",
    "filters.jobType.label": "Job type",
    "filters.city.label": "Region",
    "filters.jobType.all": "All",
    "filters.jobType.Part-time": "Part-time",
    "filters.jobType.Internship": "Internship",
    "filters.jobType.Remote": "Remote",
    "filters.jobType.Full-time": "Full-time",
    "filters.city.all": "All cities",
    "filters.city.Toshkent": "Tashkent",
    "filters.city.Samarqand": "Samarkand",
    "filters.city.Buxoro": "Bukhara",
    "filters.city.Farg‘ona": "Fergana",
    "filters.city.Onlayn": "Online",

    "jobsListing.noResults.title": "No results found",
    "jobsListing.noResults.description":
      "Change the filters or try a different keyword.",

    "jobCard.apply": "Apply",
    "jobCard.details": "Details",

    "apply.title.brand": "TalabaJob",
    "apply.title.forJob": "Apply for this position",
    "apply.title.default": "Sign up / Application",
    "apply.subtitle": "Fill in the fields — our team will reach out to you.",
    "apply.questions": "Questions?",
    "apply.questions.aboutLink": "About us",

    "apply.thanks.title": "Thank you!",
    "apply.thanks.body": "Your application has been sent. We will contact you soon.",
    "apply.thanks.backToJobs": "Back to jobs",

    "apply.form.fullName": "Full name",
    "apply.form.phone": "Phone number",
    "apply.form.telegram": "Telegram username",
    "apply.form.university": "University",
    "apply.form.message": "Short message",
    "apply.form.cv": "CV (demo)",

    "apply.form.placeholder.fullName": "For example: Aziza Karimova",
    "apply.form.placeholder.phone": "+998 __ ___ __ __",
    "apply.form.placeholder.telegram": "@username",
    "apply.form.placeholder.university": "For example: Tashkent University of Economics",
    "apply.form.placeholder.message": "Write a short note about yourself and your interests",
    "apply.form.cv.filePicker": "Select a file",
    "apply.form.cv.dropHint": "or drag it here",
    "apply.form.cv.helper": "PDF or Word — max. 5 MB (demo mode)",

    "apply.form.submit": "Submit",
    "apply.form.submitting": "Submitting…",

    "home.hero.pill": "A job platform for students",
    "home.hero.title": "A job-finding platform for students",
    "home.hero.description":
      "Part-time jobs, internships, and junior opportunities in one place — flexible schedules, verified employers, and an application in one click.",
    "home.hero.stats.students": "Students",
    "home.hero.stats.jobs": "Jobs",
    "home.hero.stats.partners": "Partners",
    "home.hero.opportunities": "Today’s opportunities",
    "home.hero.tag.new": "New",
    "home.hero.tag.shiftPrefix": "Shift",
    "home.hero.bottom.oneClick": "One click — application sent",
    "home.hero.bottom.response": "Quick response, transparent process",

    "home.features.1.title": "Student-friendly jobs",
    "home.features.1.description":
      "Shifts that fit your class schedule, part-time roles, and internships — all in one place with filters.",
    "home.features.2.title": "One click — application",
    "home.features.2.description":
      "Fill your profile once and quickly apply to your favorite positions.",
    "home.features.3.title": "Internships & junior roles",
    "home.features.3.description":
      "Real projects, mentorship, and portfolio opportunities to kickstart your career.",
    "home.features.4.title": "Verified employers",
    "home.features.4.description":
      "We review our partners and support a safe, transparent process for students.",

    "home.steps.1.step": "01",
    "home.steps.1.title": "Search jobs",
    "home.steps.1.text": "Choose a role, city, and job type — results in seconds.",
    "home.steps.2.step": "02",
    "home.steps.2.title": "Easy application",
    "home.steps.2.text": "A short form and CV upload — no extra steps.",
    "home.steps.3.step": "03",
    "home.steps.3.title": "Contact & interview",
    "home.steps.3.text": "The employer will contact you soon and define the next step.",

    "home.section.problem.eyebrow": "The challenge",
    "home.section.problem.title": "Finding the right job for students is still hard",
    "home.section.problem.description":
      "Balancing classes, projects, and personal time isn’t easy. Many listings require full-time schedules or experience, and shifts often don’t match your timetable.",
    "home.section.approach.label": "TalabaJob approach",
    "home.section.approach.title": "Flexible schedules, curated listings, and internships to start your career",
    "home.section.approach.bullet.1": "Separate filters for part-time and internships",
    "home.section.approach.bullet.2": "Online and hybrid opportunities",
    "home.section.approach.bullet.3": "Transparent communication with employers",

    "home.section.opportunities.eyebrow": "Why us",
    "home.section.opportunities.title": "Why TalabaJob?",
    "home.section.opportunities.description":
      "A platform for students and new professionals — simple, fast, and reliable.",

    "home.section.process.eyebrow": "How it works",
    "home.section.process.title": "How does it work?",
    "home.section.process.description": "Three simple steps — then your career starts.",

    "home.section.selected.eyebrow": "Featured",
    "home.section.selected.title": "Popular positions",
    "home.section.selected.description": "The most viewed opportunities for students this week.",
    "home.section.selected.allJobs": "All jobs",

    "home.section.start.eyebrow": "Get started",
    "home.section.start.title": "Start your career today",
    "home.section.start.description":
      "Like thousands of students, find a job or internship that fits — sign up in one minute.",
    "home.section.start.cta.jobs": "View jobs",
    "home.section.start.cta.apply": "Apply",

    "section.jobs.eyebrow": "Jobs",
    "section.jobs.title": "Jobs and internships for students",
    "section.jobs.description":
      "Use filters — search by role, job type, and city. All listings are demo data.",

    "section.employers.eyebrow": "Partnership",
    "section.employers.heroTitle": "Why TalabaJob?",
    "section.employers.heroDescription":
      "We simplify connecting with students and young specialists — and you fill your team faster.",

    "employers.benefit.1.title": "Reach young talent",
    "employers.benefit.1.description":
      "Motivated students and new specialists — ideal for startups and mid-sized businesses.",
    "employers.benefit.2.title": "Hire faster",
    "employers.benefit.2.description": "Accurate filters and ready profiles — interviews don’t waste your time.",
    "employers.benefit.3.title": "Student-focused audience",
    "employers.benefit.3.description":
      "Your listings reach students looking for part-time roles and internships.",

    "employers.cta.label": "Partnership",
    "employers.cta.title": "Post your vacancy",
    "employers.cta.description":
      "Press the button for a demo — we will contact you next, and create the listing together.",
    "employers.cta.button": "Post a vacancy",

    "about.eyebrow": "About the startup",
    "about.title": "TalabaJob — a platform that works for tomorrow",
    "about.description":
      "We’re a team that started in an incubator program — our goal is to create a modern, transparent job search experience for students.",
    "about.story.title": "Our story",
    "about.story.body":
      "The TalabaJob idea came from a simple observation: for many students looking for balance between classes and work, suitable vacancies are still scattered and unclear. We’re closing that gap — by building a platform for searching, filtering, and contacting trusted employers in one place.",
    "about.mission.title": "Mission",
    "about.mission.body":
      "Deliver flexible jobs, internships, and entry-level career opportunities to students in Uzbekistan — in a simple and understandable way.",
    "about.vision.title": "Vision",
    "about.vision.body":
      "Become the most trusted and modern connection platform between young people and employers across the country.",
    "about.demoMode.label": "Demo mode:",
    "about.demoMode.body":
      "TalabaJob is currently an MVP — sample data, and backend integration is next.",
    "about.cta.button": "View jobs",

    "jobDetail.backToJobs": "Back to jobs",
    "jobDetail.applyNow": "Apply now",
    "jobDetail.otherJobs": "Other jobs",
    "jobDetail.section.description": "Description",
    "jobDetail.section.responsibilities": "Responsibilities",
    "jobDetail.section.requirements": "Requirements",
    "jobDetail.section.benefits": "Benefits",

    "jobNotFound.title": "Job not found",
    "jobNotFound.description": "This listing may not exist or may have been removed.",
    "jobNotFound.backToJobs": "Back to jobs",

    "tags.Flexible": "Flexible",

    "metadata.home.title.default": "TalabaJob — jobs and internships for students",
    "metadata.home.title.template": "%s | TalabaJob",
    "metadata.home.description":
      "Part-time jobs, internships, and junior opportunities for students in Uzbekistan. Search in one place and apply quickly.",

    "metadata.jobs.title": "Job listings",
    "metadata.jobs.description":
      "Vacancies by part-time, internship, remote, and full-time — Tashkent, Samarkand, Bukhara, Fergana, and online.",

    "metadata.employers.title": "For employers",
    "metadata.employers.description":
      "Reach young talent — hire faster with TalabaJob and find vacancies that fit students.",

    "metadata.about.title": "About",
    "metadata.about.description":
      "TalabaJob — a bridge between students and job opportunities in Uzbekistan.",

    "metadata.apply.title": "Application",
    "metadata.apply.description": "TalabaJob — a quick and easy application form.",

    "metadata.job.notFound.title": "Not found",
  },
  ru: {
    "nav.home": "Главная",
    "nav.jobs": "Вакансии",
    "nav.employers": "Работодатели",
    "nav.about": "О нас",
    "nav.openMenu": "Меню",
    "nav.cta.jobs": "Посмотреть вакансии",
    "nav.cta.apply": "Откликнуться",
    "nav.language": "Язык",

    "footer.quickLinks": "Быстрые ссылки",
    "footer.contact": "Контакты",
    "footer.tagline":
      "Подработка, стажировки и стартовые карьерные возможности для студентов в Узбекистане.",
    "footer.badge": "Демо MVP · презентация инкубатора",
    "footer.copyright": "Все права защищены.",
    "footer.location": "Самарканд, Узбекистан",
    "footer.link.apply": "Отклик",

    "filters.search.sr": "Поиск",
    "filters.search.placeholder": "Поиск по должности или компании",
    "filters.jobType.label": "Тип работы",
    "filters.city.label": "Регион",
    "filters.jobType.all": "Все",
    "filters.jobType.Part-time": "Неполная занятость",
    "filters.jobType.Internship": "Стажировка",
    "filters.jobType.Remote": "Удалённо",
    "filters.jobType.Full-time": "Полная занятость",
    "filters.city.all": "Все города",
    "filters.city.Toshkent": "Ташкент",
    "filters.city.Samarqand": "Самарканд",
    "filters.city.Buxoro": "Бухара",
    "filters.city.Farg‘ona": "Фергана",
    "filters.city.Onlayn": "Онлайн",

    "jobsListing.noResults.title": "Ничего не найдено",
    "jobsListing.noResults.description": "Измените фильтры или попробуйте другое ключевое слово.",

    "jobCard.apply": "Откликнуться",
    "jobCard.details": "Подробнее",

    "apply.title.brand": "TalabaJob",
    "apply.title.forJob": "Отклик на эту вакансию",
    "apply.title.default": "Регистрация / Заявка",
    "apply.subtitle": "Заполните поля — наша команда скоро свяжется с вами.",
    "apply.questions": "Есть вопросы?",
    "apply.questions.aboutLink": "О нас",

    "apply.thanks.title": "Спасибо!",
    "apply.thanks.body": "Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
    "apply.thanks.backToJobs": "К списку вакансий",

    "apply.form.fullName": "ФИО",
    "apply.form.phone": "Номер телефона",
    "apply.form.telegram": "Telegram username",
    "apply.form.university": "Учебное заведение",
    "apply.form.message": "Короткое сообщение",
    "apply.form.cv": "Резюме (демо)",

    "apply.form.placeholder.fullName": "Например: Азиза Каримова",
    "apply.form.placeholder.phone": "+998 __ ___ __ __",
    "apply.form.placeholder.telegram": "@username",
    "apply.form.placeholder.university": "Например: Ташкентский экономический университет",
    "apply.form.placeholder.message": "Коротко расскажите о себе и своих интересах",
    "apply.form.cv.filePicker": "Выбрать файл",
    "apply.form.cv.dropHint": "или перетащите сюда",
    "apply.form.cv.helper": "PDF или Word — макс. 5 МБ (демо режим)",

    "apply.form.submit": "Отправить",
    "apply.form.submitting": "Отправляем…",

    "home.hero.pill": "Платформа работы для студентов",
    "home.hero.title": "Платформа поиска работы для студентов",
    "home.hero.description":
      "Подработка, стажировки и junior-возможности в одном месте — гибкий график, проверенные работодатели и заявка в один клик.",
    "home.hero.stats.students": "Студенты",
    "home.hero.stats.jobs": "Вакансии",
    "home.hero.stats.partners": "Партнёры",
    "home.hero.opportunities": "Возможности сегодня",
    "home.hero.tag.new": "Новое",
    "home.hero.tag.shiftPrefix": "Смена",
    "home.hero.bottom.oneClick": "Один клик — заявка отправлена",
    "home.hero.bottom.response": "Быстрый ответ, прозрачный процесс",

    "home.features.1.title": "Работа для студентов",
    "home.features.1.description":
      "График, который подходит под расписание, частичная занятость и стажировки — всё в одном месте с фильтрами.",
    "home.features.2.title": "Один клик — заявка",
    "home.features.2.description": "Заполните профиль один раз и быстро отправляйте отклики на любимые вакансии.",
    "home.features.3.title": "Стажировки и junior-ролы",
    "home.features.3.description":
      "Реальные проекты, менторство и возможности для портфолио — чтобы начать карьеру.",
    "home.features.4.title": "Проверенные работодатели",
    "home.features.4.description": "Мы проверяем партнёров и поддерживаем безопасный и прозрачный процесс для студентов.",

    "home.steps.1.step": "01",
    "home.steps.1.title": "Найдите работу",
    "home.steps.1.text": "Выберите должность, город и тип работы — результаты за секунды.",
    "home.steps.2.step": "02",
    "home.steps.2.title": "Легко подать заявку",
    "home.steps.2.text": "Короткая форма и загрузка CV — без лишних шагов.",
    "home.steps.3.step": "03",
    "home.steps.3.title": "Контакт и собеседование",
    "home.steps.3.text": "Работодатель скоро свяжется с вами и определит следующий шаг.",

    "home.section.problem.eyebrow": "Проблема",
    "home.section.problem.title": "Подобрать работу для студентов всё ещё сложно",
    "home.section.problem.description":
      "Баланс между учёбой, проектами и личным временем — непростая задача. Многие вакансии требуют полной занятости или опыта, а смены часто не совпадают с расписанием.",
    "home.section.approach.label": "Подход TalabaJob",
    "home.section.approach.title": "Гибкий график, точные объявления и стажировки для старта карьеры",
    "home.section.approach.bullet.1": "Отдельные фильтры для part-time и стажировок",
    "home.section.approach.bullet.2": "Онлайн и гибридные возможности",
    "home.section.approach.bullet.3": "Прозрачная связь с работодателями",

    "home.section.opportunities.eyebrow": "Возможности",
    "home.section.opportunities.title": "Почему TalabaJob?",
    "home.section.opportunities.description": "Платформа для студентов и начинающих специалистов — простая, быстрая и надёжная.",

    "home.section.process.eyebrow": "Процесс",
    "home.section.process.title": "Как это работает?",
    "home.section.process.description": "Три простых шага — и начинается ваш карьерный путь.",

    "home.section.selected.eyebrow": "Подборка",
    "home.section.selected.title": "Популярные вакансии",
    "home.section.selected.description": "Самые просматриваемые возможности для студентов на этой неделе.",
    "home.section.selected.allJobs": "Все вакансии",

    "home.section.start.eyebrow": "Начать",
    "home.section.start.title": "Начните карьеру уже сегодня",
    "home.section.start.description": "Как и тысячи студентов, найдите подходящую работу или стажировку — зарегистрируйтесь за минуту.",
    "home.section.start.cta.jobs": "Посмотреть вакансии",
    "home.section.start.cta.apply": "Откликнуться",

    "section.jobs.eyebrow": "Вакансии",
    "section.jobs.title": "Работа и стажировки для студентов",
    "section.jobs.description": "Используйте фильтры — ищите по должности, типу работы и городу. Все объявления — демо данные.",

    "section.employers.eyebrow": "Партнёрство",
    "section.employers.heroTitle": "Почему TalabaJob?",
    "section.employers.heroDescription": "Мы упрощаем связь с студентами и молодыми специалистами — а вы быстрее комплектуете команду.",

    "employers.benefit.1.title": "Достучаться до молодых талантов",
    "employers.benefit.1.description": "Мотивированные студенты и новые специалисты — идеальны для стартапов и среднего бизнеса.",
    "employers.benefit.2.title": "Нанимайте быстрее",
    "employers.benefit.2.description": "Точные фильтры и готовые профили — собеседования экономят ваше время.",
    "employers.benefit.3.title": "Аудитория, ориентированная на студентов",
    "employers.benefit.3.description": "Ваши объявления доходят до студентов, которые ищут part-time и стажировки.",

    "employers.cta.label": "Партнёрство",
    "employers.cta.title": "Разместите вакансию",
    "employers.cta.description": "Нажмите кнопку для демо — далее мы свяжемся с вами и создадим объявление вместе.",
    "employers.cta.button": "Разместить вакансию",

    "about.eyebrow": "О стартапе",
    "about.title": "TalabaJob — платформа, которая работает на завтра",
    "about.description": "Мы — команда, начавшаяся в инкубаторе. Наша цель — создать современный, прозрачный опыт поиска работы для студентов.",
    "about.story.title": "Наша история",
    "about.story.body": "Идея TalabaJob родилась из простого наблюдения: для многих студентов, которые ищут баланс между учёбой и работой, подходящие вакансии до сих пор разбросаны и непонятны. Мы закрываем этот пробел — создаём платформу для поиска, фильтрации и связи с проверенными работодателями в одном месте.",
    "about.mission.title": "Миссия",
    "about.mission.body": "Донести до студентов Узбекистана гибкую работу, стажировки и возможности для старта карьеры — простым и понятным способом.",
    "about.vision.title": "Видение",
    "about.vision.body": "Стать самой надёжной и современной платформой связей между молодёжью и работодателями по всей стране.",
    "about.demoMode.label": "Демо режим:",
    "about.demoMode.body": "TalabaJob сейчас — MVP: примерные данные, интеграция backend — на следующем этапе.",
    "about.cta.button": "Посмотреть вакансии",

    "jobDetail.backToJobs": "К списку вакансий",
    "jobDetail.applyNow": "Откликнуться",
    "jobDetail.otherJobs": "Другие вакансии",
    "jobDetail.section.description": "Описание",
    "jobDetail.section.responsibilities": "Обязанности",
    "jobDetail.section.requirements": "Требования",
    "jobDetail.section.benefits": "Преимущества",

    "jobNotFound.title": "Вакансия не найдена",
    "jobNotFound.description": "Этого объявления может не быть или оно могло быть удалено.",
    "jobNotFound.backToJobs": "К списку вакансий",

    "tags.Flexible": "Flexible",

    "metadata.home.title.default": "TalabaJob — работа и стажировки для студентов",
    "metadata.home.title.template": "%s | TalabaJob",
    "metadata.home.description": "Подработка, стажировки и junior-возможности для студентов в Узбекистане. Ищите в одном месте и подавайте заявку быстро.",

    "metadata.jobs.title": "Список вакансий",
    "metadata.jobs.description": "Вакансии по part-time, стажировкам, remote и полной занятости — Ташкент, Самарканд, Бухара, Фергана и онлайн.",

    "metadata.employers.title": "Для работодателей",
    "metadata.employers.description": "Откройтесь для молодых талантов — наймите быстрее с TalabaJob и найдите вакансии, подходящие студентам.",

    "metadata.about.title": "О нас",
    "metadata.about.description": "TalabaJob — мост между студентами и возможностями трудоустройства в Узбекистане.",

    "metadata.apply.title": "Заявка",
    "metadata.apply.description": "TalabaJob — быстрый и простой бланк заявки.",

    "metadata.job.notFound.title": "Не найдено",
  },
};

export function t(locale: Locale | string | undefined, key: string) {
  const effectiveLocale =
    typeof locale === "string" && isLocale(locale) ? locale : defaultLocale;
  const localized = STRINGS[effectiveLocale]?.[key];
  if (localized) return localized;
  return STRINGS[defaultLocale]?.[key] ?? key;
}

// Convenience helpers for known key fields.
export function jobTypeLabel(locale: Locale, jobType: string) {
  return t(locale, `filters.jobType.${jobType}`);
}

export function cityLabel(locale: Locale, city: string) {
  return t(locale, `filters.city.${city}`);
}

