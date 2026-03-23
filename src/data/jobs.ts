import type { Job, JobBase } from "@/types/job";
import { defaultLocale, type Locale } from "@/i18n/locales";

export const jobsBase: JobBase[] = [
  {
    id: "smm-assistant-tashkent",
    company: "Digital Grow Agency",
    location: "Toshkent",
    type: "Part-time",
    tags: ["Student-friendly", "Flexible", "Remote"],
    i18n: {
      uz: {
        title: "SMM yordamchisi",
        shortDescription:
          "Instagram va Telegram uchun kontent rejalashtirish, oddiy postlar va statistikaga yordam.",
        description:
          "Biz kichik, tez o‘sayotgan marketing agentligimiz. Talabalar uchun mos jadval: haftada 15–20 soat. Jamoa bilan birga brend ovozini rivojlantirasiz.",
        responsibilities: [
          "Kontent kalendari va g‘oya bankini boshqarish",
          "Oddiy grafik va matnlar uchun qisqa brief yozish",
          "Hisobotlar va engagement ko‘rsatkichlarini kuzatish",
        ],
        requirements: [
          "Ijtimoiy tarmoqlarda faollik va estetik hissiyot",
          "Asosiy dizayn vositalari (Canva yoki analog)",
          "O‘zbek va ingliz tillarida yozish qobiliyati",
        ],
        benefits: [
          "Mentorlik va portfolio uchun real loyihalar",
          "Moslashuvchan grafik",
          "Jamoada networking",
        ],
        salary: "3 500 000 – 5 000 000 so‘m / oy",
      },
      en: {
        title: "SMM Assistant",
        shortDescription:
          "Content planning for Instagram and Telegram, helping with simple posts and analytics.",
        description:
          "We are a small, fast-growing marketing agency. A student-friendly schedule: 15–20 hours per week. With the team, you’ll develop the brand voice.",
        responsibilities: [
          "Manage the content calendar and an idea bank",
          "Write short briefs for simple graphics and copy",
          "Track reports and engagement metrics",
        ],
        requirements: [
          "Active on social media and a good sense of aesthetics",
          "Basic design tools (Canva or similar)",
          "Ability to write in Uzbek and English",
        ],
        benefits: [
          "Mentorship and real projects for your portfolio",
          "Flexible schedule",
          "Networking within the team",
        ],
        salary: "3,500,000 – 5,000,000 so‘m / month",
      },
      ru: {
        title: "Помощник по SMM",
        shortDescription:
          "Планирование контента для Instagram и Telegram: помощь с простыми постами и аналитикой.",
        description:
          "Мы — небольшое, быстрорастущее маркетинговое агентство. Удобный график для студентов: 15–20 часов в неделю. Вместе с командой вы будете развивать голос бренда.",
        responsibilities: [
          "Вести контент-календарь и банк идей",
          "Писать короткие брифы для простых графики и текстов",
          "Отслеживать отчёты и показатели вовлеченности",
        ],
        requirements: [
          "Активность в соцсетях и чувство эстетики",
          "Базовые инструменты дизайна (Canva или аналоги)",
          "Умение писать на узбекском и английском",
        ],
        benefits: [
          "Наставничество и реальные проекты для портфолио",
          "Гибкий график",
          "Нетворкинг в команде",
        ],
        salary: "3 500 000 – 5 000 000 so‘m / месяц",
      },
    },
  },
  {
    id: "sales-intern-samarkand",
    company: "ProRetail Group",
    location: "Samarqand",
    type: "Internship",
    tags: ["Student-friendly", "Mentorship"],
    i18n: {
      uz: {
        title: "Sotuvlar bo‘yicha stajyor",
        shortDescription:
          "Do‘kon va korporativ mijozlar bilan muloqot, takliflar va mini-taqdimotlar.",
        description:
          "Samarqanddagi chakana tarmoq uchun yangi staj dasturi. Sotuv va mijozlar bilan ishlash bo‘yicha amaliy ko‘nikmalar.",
        responsibilities: [
          "Mijozlarni kutish va mahsulot haqida qisqa ma’lumot berish",
          "CRM-da yozuvlarni yangilash",
          "Haftalik mini-hisobotlar",
        ],
        requirements: [
          "3–4-kurs talabalari uchun mos",
          "Muloqot va ishonchlilik",
          "Asosiy Excel bilimi",
        ],
        benefits: [
          "Rasmiy staj guvohnomasi",
          "Sotuv bo‘limi rahbari bilan haftalik sessiya",
          "Bonuslar aniq KPI bo‘yicha",
        ],
        salary: "2 800 000 so‘m / oy + bonus",
      },
      en: {
        title: "Sales Intern",
        shortDescription:
          "Communicate with store and corporate customers, prepare offers, and make mini-presentations.",
        description:
          "A new internship program for the retail network in Samarkand. Build practical sales and customer-handling skills.",
        responsibilities: [
          "Welcome customers and provide brief product information",
          "Update records in the CRM",
          "Weekly mini-reports",
        ],
        requirements: [
          "Suitable for 3–4th year students",
          "Communication skills and reliability",
          "Basic Excel knowledge",
        ],
        benefits: [
          "An official internship certificate",
          "Weekly sessions with the Head of Sales",
          "Bonuses based on clear KPIs",
        ],
        salary: "2,800,000 so‘m / month + bonus",
      },
      ru: {
        title: "Стажёр по продажам",
        shortDescription:
          "Общение с розничными и корпоративными клиентами, подготовка предложений и мини-презентаций.",
        description:
          "Новая стажировочная программа для розничной сети в Самарканде. Получите практические навыки в продажах и работе с клиентами.",
        responsibilities: [
          "Встречать клиентов и кратко рассказывать о продукте",
          "Обновлять записи в CRM",
          "Еженедельные мини-отчёты",
        ],
        requirements: [
          "Подходит для студентов 3–4 курса",
          "Коммуникабельность и надёжность",
          "Базовые знания Excel",
        ],
        benefits: [
          "Официальное свидетельство о стажировке",
          "Еженедельные сессии с руководителем отдела продаж",
          "Бонусы по чётким KPI",
        ],
        salary: "2 800 000 so‘m / месяц + бонус",
      },
    },
  },
  {
    id: "call-center-tashkent",
    company: "ConnectCall",
    location: "Toshkent",
    type: "Part-time",
    tags: ["Flexible", "Shift", "Student-friendly"],
    i18n: {
      uz: {
        title: "Call-markaz operatori",
        shortDescription:
          "Kiruvchi qo‘ng‘iroqlar, buyurtma holati va oddiy savollar bo‘yicha yordam.",
        description:
          "Fintech va logistika loyihalari uchun qo‘llab-quvvatlash liniyasi. Kechki va dam olish kunlari smenalari mavjud.",
        responsibilities: [
          "Qo‘ng‘iroqlarni tez va xushmuomalalik bilan qabul qilish",
          "Skript bo‘yicha savollarni hal qilish",
          "Ticketlarni CRMga kiritish",
        ],
        requirements: [
          "Tinch ovoz va stressga chidamlilik",
          "O‘zbek va rus tillarida erkin muloqot",
          "Kompyuter savodxonligi",
        ],
        benefits: [
          "Ishxonada bepul ichimliklar",
          "Smena tanlash imkoniyati",
          "Tez o‘sish uchun ichki treninglar",
        ],
        salary: "4 000 000 – 6 000 000 so‘m / oy",
      },
      en: {
        title: "Call Center Operator",
        shortDescription:
          "Help with incoming calls, order status, and simple questions.",
        description:
          "A support line for fintech and logistics projects. Evening and weekend shifts available.",
        responsibilities: [
          "Handle incoming calls quickly and politely",
          "Resolve questions according to scripts",
          "Enter tickets into the CRM",
        ],
        requirements: [
          "A calm voice and stress tolerance",
          "Fluent communication in Uzbek and Russian",
          "Computer literacy",
        ],
        benefits: [
          "Free drinks at the office",
          "Ability to choose your shift",
          "Internal trainings for fast growth",
        ],
        salary: "4,000,000 – 6,000,000 so‘m / month",
      },
      ru: {
        title: "Оператор call-центра",
        shortDescription:
          "Помощь с входящими звонками, статусом заказов и простыми вопросами.",
        description:
          "Линия поддержки для fintech и логистических проектов. Есть вечерние и выходные смены.",
        responsibilities: [
          "Быстро и вежливо принимать звонки",
          "Решать вопросы по скриптам",
          "Вносить обращения в CRM",
        ],
        requirements: [
          "Спокойный голос и стрессоустойчивость",
          "Свободное общение на узбекском и русском",
          "Компьютерная грамотность",
        ],
        benefits: [
          "Бесплатные напитки в офисе",
          "Возможность выбирать смену",
          "Внутренние тренинги для быстрого роста",
        ],
        salary: "4 000 000 – 6 000 000 so‘m / месяц",
      },
    },
  },
  {
    id: "frontend-intern-remote",
    company: "CloudCraft Labs",
    location: "Onlayn",
    type: "Remote",
    tags: ["Remote", "Mentorship", "Flexible"],
    i18n: {
      uz: {
        title: "Frontend dasturchi (stajyor)",
        shortDescription:
          "React va TypeScript bilan komponentlar, dizayn tizimi bilan ishlash.",
        description:
          "To‘liq masofaviy jamoa. Kichik feature’lar va code review orqali o‘sish. MVP va startup muhiti.",
        responsibilities: [
          "UI komponentlarini Next.js va Tailwind bilan qurish",
          "API javoblarini ekranga chiqarish",
          "Bug fix va kichik refaktorlar",
        ],
        requirements: [
          "HTML, CSS, JavaScript asoslari",
          "Git bilan ishlash tajribasi",
          "Ingliz tilida texnik hujjatlarni o‘qish",
        ],
        benefits: ["1:1 mentorlik", "Haqiqiy mahsulotga hissa", "Sertifikat va tavsiyanoma"],
        salary: "Stipendiya: 3 000 000 so‘m / oy",
      },
      en: {
        title: "Frontend Developer Intern",
        shortDescription:
          "Build UI components with React and TypeScript and work with the design system.",
        description:
          "A fully remote team. Grow through small features and code reviews. MVP and startup environment.",
        responsibilities: [
          "Build UI components using Next.js and Tailwind",
          "Render API responses on the screen",
          "Fix bugs and do small refactors",
        ],
        requirements: [
          "Basics of HTML, CSS, and JavaScript",
          "Experience working with Git",
          "Read technical documentation in English",
        ],
        benefits: ["1:1 mentorship", "Contribute to a real product", "Certificates and references"],
        salary: "Stipend: 3,000,000 so‘m / month",
      },
      ru: {
        title: "Стажёр фронтенд-разработчика",
        shortDescription:
          "Разработка UI-компонентов с React и TypeScript и работа с дизайн-системой.",
        description:
          "Полностью удалённая команда. Развитие через небольшие задачи и code review. MVP и среда стартапа.",
        responsibilities: [
          "Собирать UI-компоненты на Next.js и Tailwind",
          "Отображать ответы API на экране",
          "Исправлять баги и делать небольшие рефакторинги",
        ],
        requirements: [
          "Базовые знания HTML, CSS, JavaScript",
          "Опыт работы с Git",
          "Умение читать техническую документацию на английском",
        ],
        benefits: ["1:1 наставничество", "Вклад в реальный продукт", "Сертификаты и рекомендации"],
        salary: "Стипендия: 3 000 000 so‘m / месяц",
      },
    },
  },
  {
    id: "english-tutor-bukhara",
    company: "SpeakUp Academy",
    location: "Buxoro",
    type: "Part-time",
    tags: ["Flexible", "Student-friendly"],
    i18n: {
      uz: {
        title: "Ingliz tili o‘qituvchisi (qisman)",
        shortDescription:
          "A2–B1 guruhlari uchun darslar, mini-trening materiallari bilan ishlash.",
        description:
          "Zamonaviy o‘quv markazi. Kechki va dam olish kunlari bandlik. Talabalar uchun ideal moslashuvchan ish.",
        responsibilities: [
          "Dars rejasini qisqa tayyorlash",
          "O‘quvchilarni motivatsiya qilish",
          "Ota-onalar bilan qisqa feedback",
        ],
        requirements: [
          "B2+ ingliz tili",
          "Pedagogikaga qiziqish",
          "Mas’uliyat va vaqtga rioya qilish",
        ],
        benefits: ["Metodik materiallar tayyor", "Ichki o‘qituvchilar klubi", "Bonus: yangi guruh jalb qilish bo‘yicha"],
        salary: "soatiga 60 000 – 90 000 so‘m",
      },
      en: {
        title: "English Teacher (Part-time)",
        shortDescription:
          "Lessons for A2–B1 groups and working with mini training materials.",
        description:
          "A modern learning center. Evening and weekend schedules. Flexible work for students.",
        responsibilities: [
          "Prepare lesson plans for short sessions",
          "Motivate students",
          "Provide short feedback to parents",
        ],
        requirements: ["B2+ English", "Interest in teaching", "Responsibility and punctuality"],
        benefits: ["Ready method materials", "Internal teachers club", "Bonus for recruiting new groups"],
        salary: "60,000 – 90,000 so‘m / hour",
      },
      ru: {
        title: "Преподаватель английского (неполная занятость)",
        shortDescription:
          "Занятия для групп A2–B1 и работа с мини-учебными материалами.",
        description:
          "Современный учебный центр. Занятость по вечерам и выходным. Гибкая работа для студентов.",
        responsibilities: [
          "Коротко готовить планы занятий",
          "Мотивировать учеников",
          "Давать краткий фидбек родителям",
        ],
        requirements: ["Английский B2+", "Интерес к педагогике", "Ответственность и пунктуальность"],
        benefits: ["Методические материалы подготовлены", "Внутренний клуб преподавателей", "Бонус за набор новых групп"],
        salary: "60 000 – 90 000 so‘m / час",
      },
    },
  },
  {
    id: "graphic-design-intern-fergana",
    company: "BrandNest Studio",
    location: "Farg‘ona",
    type: "Internship",
    tags: ["Portfolio", "Mentorship"],
    i18n: {
      uz: {
        title: "Grafik dizayner (stajyor)",
        shortDescription: "Ijtimoiy tarmoqlar uchun vizual, katalog va bannerlar.",
        description:
          "Mahalliy brendlar bilan ishlaydigan studiya. Talaba uchun portfolio to‘ldirish va real brieflar.",
        responsibilities: ["SMM va print uchun makiylar", "Brend qoidalariga rioya qilish", "Mijozdan feedback olish va tuzatishlar"],
        requirements: ["Figma yoki Adobe asoslari", "Rang va tipografiya tuyg‘usi", "Portfolio namunasi (hatto o‘quv loyihalari)"],
        benefits: ["Senior dizayner bilan qo‘shma sessiyalar", "Ishdan keyin to‘liq vaqt taklifi imkoniyati", "Studiya ichida tadbirlar"],
        salary: "2 500 000 so‘m / oy",
      },
      en: {
        title: "Graphic Designer (Intern)",
        shortDescription: "Visuals, catalogs, and banners for social media.",
        description:
          "A studio that works with local brands. Help you build your portfolio with real briefs.",
        responsibilities: [
          "Mockups for SMM and print",
          "Follow brand guidelines",
          "Collect feedback from the client and make adjustments",
        ],
        requirements: ["Basics of Figma or Adobe", "Strong sense of color and typography", "Portfolio examples (even coursework)"],
        benefits: ["Co-working sessions with a senior designer", "Chance for a full-time offer after work", "Studio events"],
        salary: "2,500,000 so‘m / month",
      },
      ru: {
        title: "Стажёр графического дизайнера",
        shortDescription: "Визуалы, каталоги и баннеры для соцсетей.",
        description:
          "Студия, работающая с локальными брендами. Поможет наполнить портфолио реальными брифами.",
        responsibilities: [
          "Макеты для SMM и печати",
          "Соблюдать бренд-гайдлайны",
          "Собирать фидбек от клиента и вносить правки",
        ],
        requirements: ["Базовые знания Figma или Adobe", "Чувство цвета и типографики", "Примеры портфолио (включая учебные проекты)"],
        benefits: ["Совместные сессии с senior-дизайнером", "Возможность предложения на full-time после работы", "Внутренние мероприятия студии"],
        salary: "2 500 000 so‘m / месяц",
      },
    },
  },
  {
    id: "data-entry-tashkent",
    company: "LogiChain",
    location: "Toshkent",
    type: "Part-time",
    tags: ["Flexible", "Remote"],
    i18n: {
      uz: {
        title: "Ma’lumotlarni kiritish yordamchisi",
        shortDescription: "Jadvallarni yangilash, hisobotlar uchun ma’lumotlarni tekshirish.",
        description:
          "Logistika startapi. Uydan yoki ofisdan ishlash mumkin. Detallarga e’tibor muhim.",
        responsibilities: ["Excel/Google Sheets da katta jadvallarni yangilash", "Xatolarni aniqlash va tekshirish", "Kichik hisobotlar tayyorlash"],
        requirements: ["Tez yozish va diqqat", "Asosiy Excel funksiyalari", "Haftada kamida 16 soat"],
        benefits: ["Masofaviy format", "Aniq topshiriqlar va deadline", "Jamoada yumshoq menejment"],
        salary: "3 200 000 – 4 000 000 so‘m / oy",
      },
      en: {
        title: "Data Entry Assistant",
        shortDescription: "Update tables and verify data for reports.",
        description:
          "A logistics startup. Work from home or the office. Attention to detail matters.",
        responsibilities: [
          "Update large spreadsheets in Excel/Google Sheets",
          "Detect and check mistakes",
          "Prepare small reports",
        ],
        requirements: ["Fast typing and attention", "Core Excel functions", "At least 16 hours per week"],
        benefits: ["Remote format", "Clear tasks and deadlines", "Gentle management in the team"],
        salary: "3,200,000 – 4,000,000 so‘m / month",
      },
      ru: {
        title: "Помощник по вводу данных",
        shortDescription: "Обновлять таблицы и проверять данные для отчётов.",
        description:
          "Логистический стартап. Можно работать из дома или из офиса. Важны внимательность и детали.",
        responsibilities: [
          "Обновлять большие таблицы в Excel/Google Sheets",
          "Находить и проверять ошибки",
          "Готовить небольшие отчёты",
        ],
        requirements: ["Быстро печатать и быть внимательным", "Основные функции Excel", "Не менее 16 часов в неделю"],
        benefits: ["Удалённый формат", "Чёткие задачи и дедлайны", "Мягкий менеджмент в команде"],
        salary: "3 200 000 – 4 000 000 so‘m / месяц",
      },
    },
  },
  {
    id: "customer-support-remote",
    company: "PayEasy",
    location: "Onlayn",
    type: "Remote",
    tags: ["Remote", "Shift", "Student-friendly"],
    i18n: {
      uz: {
        title: "Mijozlarni qo‘llab-quvvatlash mutaxassisi",
        shortDescription:
          "Chat va email orqali to‘lovlar, hisob va umumiy savollar bo‘yicha yordam.",
        description:
          "To‘lov xizmatlari startapi. 24/7 qo‘llab-quvvatlash modeli — smenalar talabalar uchun moslashtirilgan.",
        responsibilities: ["Ticketlarni javoblash va yo‘naltirish", "Incidentslarni loglash", "FAQ yangilash uchun takliflar"],
        requirements: ["Xushmuomala yozish uslubi", "Texnik savollarni soddalashtirish qobiliyati", "Ingliz tili (asosiy daraja)"],
        benefits: ["To‘liq masofaviy", "Smena bonuslari", "Ichki bilim bazasi va treninglar"],
        salary: "4 500 000 – 5 500 000 so‘m / oy",
      },
      en: {
        title: "Customer Support Specialist",
        shortDescription:
          "Help with payments via chat and email, accounts, invoices, and general questions.",
        description:
          "A payments services startup. 24/7 support model — shift schedules adapted for students.",
        responsibilities: ["Answer and route tickets", "Log incidents", "Suggest updates for the FAQ"],
        requirements: ["Polite writing style", "Ability to simplify technical questions", "English (basic level)"],
        benefits: ["Fully remote", "Shift bonuses", "Internal knowledge base and trainings"],
        salary: "4,500,000 – 5,500,000 so‘m / month",
      },
      ru: {
        title: "Специалист по поддержке клиентов",
        shortDescription:
          "Помощь с оплатами через чат и email, счетами и общими вопросами.",
        description:
          "Стартап по платежным сервисам. Поддержка 24/7 — смены адаптированы под студентов.",
        responsibilities: [
          "Отвечать на тикеты и перенаправлять",
          "Логировать инциденты",
          "Предлагать обновления для FAQ",
        ],
        requirements: ["Вежливый стиль письма", "Умение упрощать технические вопросы", "Английский (базовый уровень)"],
        benefits: ["Полностью удалённо", "Бонусы за смены", "Внутренняя база знаний и тренинги"],
        salary: "4 500 000 – 5 500 000 so‘m / месяц",
      },
    },
  },
  {
    id: "barista-parttime-tashkent",
    company: "Bean & Co",
    location: "Toshkent",
    type: "Part-time",
    tags: ["Flexible", "Student-friendly"],
    i18n: {
      uz: {
        title: "Barista (qisman bandlik)",
        shortDescription: "Kofe tayyorlash, kassirlik va mehmonxona tartibini saqlash.",
        description:
          "Markaziy kofe zanjirasi. Talabalar uchun ertalab va kechki smenalar.",
        responsibilities: ["Espresso va sutli ichimliklar", "Kassa va mini-inventarizatsiya", "Mehmonlarga pozitiv xizmat"],
        requirements: ["Xushmuomalalik", "Tez o‘rganishga tayyorlik", "Sog‘lom turmush tarzi (ovqatlanish sohasi)"],
        benefits: ["Ichki o‘qitish", "Ishchi kiyim", "Chegirmalar va ichki eventlar"],
        salary: "soatiga 35 000 – 45 000 so‘m + chay",
      },
      en: {
        title: "Barista (Part-time)",
        shortDescription:
          "Prepare coffee, handle the cash register, and keep the guest area tidy.",
        description:
          "A central coffee chain. Morning and evening shifts for students.",
        responsibilities: ["Espresso and milk-based drinks", "Cash register and mini inventory", "Friendly service to guests"],
        requirements: ["A friendly, welcoming attitude", "Willingness to learn quickly", "A healthy lifestyle (food service)"],
        benefits: ["Internal training", "Work uniform", "Discounts and internal events"],
        salary: "35,000 – 45,000 so‘m / hour + tips",
      },
      ru: {
        title: "Бариста (неполная занятость)",
        shortDescription:
          "Готовить кофе, работать на кассе и поддерживать порядок в зоне для гостей.",
        description:
          "Центральная сеть кофеен. Смены утром и вечером для студентов.",
        responsibilities: ["Эспрессо и напитки с молоком", "Касса и мини-инвентаризация", "Позитивное обслуживание гостей"],
        requirements: ["Вежливость", "Готовность быстро учиться", "Здоровый образ жизни (сфера питания)"],
        benefits: ["Внутреннее обучение", "Фирменная форма", "Скидки и внутренние мероприятия"],
        salary: "35 000 – 45 000 so‘m / час + чаевые",
      },
    },
  },
  {
    id: "fulltime-junior-analyst",
    company: "NorthStar Consulting",
    location: "Toshkent",
    type: "Full-time",
    tags: ["Career track"],
    i18n: {
      uz: {
        title: "Junior biznes tahlilchisi",
        shortDescription: "Excel va oddiy BI vositalari bilan hisobotlar, bozor va mijoz tahlili.",
        description:
          "Konsalting firmasi. Bitiruvchilarga mos entry-level lavozim. Ofis + ba’zan masofaviy kunlar.",
        responsibilities: ["Ma’lumotlarni yig‘ish va vizualizatsiya", "Taqqoslovchi jadvallar", "Mijoz uchrashuvlariga tayyorgarlik"],
        requirements: ["Iqtisod yoki IT yo‘nalishi bo‘yicha bakalavr", "Excel (pivot, asosiy formula)", "Ingliz tili o‘qish darajasi"],
        benefits: ["Sog‘liq sug‘urtasi", "Katta loyihalar bilan ishlash", "Yillik o‘sish rejalari"],
        salary: "9 000 000 – 11 000 000 so‘m / oy",
      },
      en: {
        title: "Junior Business Analyst",
        shortDescription:
          "Reports using Excel and basic BI tools; market and customer analysis.",
        description:
          "A consulting firm. An entry-level role for graduates. Office + sometimes remote days.",
        responsibilities: ["Collect data and create visualizations", "Comparative tables", "Prepare for client meetings"],
        requirements: ["Bachelor in economics or IT", "Excel (pivot, core formulas)", "English reading level"],
        benefits: ["Health insurance", "Work with large projects", "Annual growth plans"],
        salary: "9,000,000 – 11,000,000 so‘m / month",
      },
      ru: {
        title: "Младший бизнес-аналитик",
        shortDescription:
          "Отчёты с Excel и простыми BI-инструментами; анализ рынка и клиентов.",
        description:
          "Консалтинговая компания. Должность начального уровня для выпускников. Офис + иногда удалённые дни.",
        responsibilities: ["Собирать данные и визуализировать", "Сравнительные таблицы", "Подготовка к встречам с клиентами"],
        requirements: ["Бакалавр по экономике или IT", "Excel (pivot, базовые формулы)", "Уровень чтения на английском"],
        benefits: ["Медицинская страховка", "Работа с крупными проектами", "Планы роста на год"],
        salary: "9 000 000 – 11 000 000 so‘m / месяц",
      },
    },
  },
];

function localizeJob(jobBase: JobBase, locale: Locale): Job {
  const localized = jobBase.i18n[locale] ?? jobBase.i18n[defaultLocale];
  return {
    id: jobBase.id,
    company: jobBase.company,
    salary: localized.salary,
    location: jobBase.location,
    type: jobBase.type,
    tags: jobBase.tags,
    title: localized.title,
    shortDescription: localized.shortDescription,
    description: localized.description,
    responsibilities: localized.responsibilities,
    requirements: localized.requirements,
    benefits: localized.benefits,
  };
}

export function getJobById(
  id: string,
  locale: Locale = defaultLocale,
): Job | undefined {
  const jobBase = jobsBase.find((j) => j.id === id);
  return jobBase ? localizeJob(jobBase, locale) : undefined;
}

export function getJobs(locale: Locale = defaultLocale): Job[] {
  return jobsBase.map((j) => localizeJob(j, locale));
}

export function getFeaturedJobs(
  limit = 3,
  locale: Locale = defaultLocale,
): Job[] {
  return getJobs(locale).slice(0, limit);
}

// Backward-compatible export for existing codepaths.
export const jobs: Job[] = getJobs(defaultLocale);

