import type { Job } from "@/types/job";

export const jobs: Job[] = [
  {
    id: "smm-assistant-tashkent",
    title: "SMM yordamchisi",
    company: "Digital Grow Agency",
    salary: "3 500 000 – 5 000 000 so‘m / oy",
    location: "Toshkent",
    type: "Part-time",
    tags: ["Student-friendly", "Flexible", "Remote"],
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
  },
  {
    id: "sales-intern-samarkand",
    title: "Sotuvlar bo‘yicha stajyor",
    company: "ProRetail Group",
    salary: "2 800 000 so‘m / oy + bonus",
    location: "Samarqand",
    type: "Internship",
    tags: ["Student-friendly", "Mentorship"],
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
  },
  {
    id: "call-center-tashkent",
    title: "Call-markaz operatori",
    company: "ConnectCall",
    salary: "4 000 000 – 6 000 000 so‘m / oy",
    location: "Toshkent",
    type: "Part-time",
    tags: ["Flexible", "Shift", "Student-friendly"],
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
  },
  {
    id: "frontend-intern-remote",
    title: "Frontend dasturchi (stajyor)",
    company: "CloudCraft Labs",
    salary: "Stipendiya: 3 000 000 so‘m / oy",
    location: "Onlayn",
    type: "Remote",
    tags: ["Remote", "Mentorship", "Flexible"],
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
    benefits: [
      "1:1 mentorlik",
      "Haqiqiy mahsulotga hissa",
      "Sertifikat va tavsiyanoma",
    ],
  },
  {
    id: "english-tutor-bukhara",
    title: "Ingliz tili o‘qituvchisi (qisman)",
    company: "SpeakUp Academy",
    salary: "soatiga 60 000 – 90 000 so‘m",
    location: "Buxoro",
    type: "Part-time",
    tags: ["Flexible", "Student-friendly"],
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
    benefits: [
      "Metodik materiallar tayyor",
      "Ichki o‘qituvchilar klubi",
      "Bonus: yangi guruh jalb qilish bo‘yicha",
    ],
  },
  {
    id: "graphic-design-intern-fergana",
    title: "Grafik dizayner (stajyor)",
    company: "BrandNest Studio",
    salary: "2 500 000 so‘m / oy",
    location: "Farg‘ona",
    type: "Internship",
    tags: ["Portfolio", "Mentorship"],
    shortDescription:
      "Ijtimoiy tarmoqlar uchun vizual, katalog va bannerlar.",
    description:
      "Mahalliy brendlar bilan ishlaydigan studiya. Talaba uchun portfolio to‘ldirish va real brieflar.",
    responsibilities: [
      "SMM va print uchun makiylar",
      "Brend qoidalariga rioya qilish",
      "Mijozdan feedback olish va tuzatishlar",
    ],
    requirements: [
      "Figma yoki Adobe asoslari",
      "Rang va tipografiya tuyg‘usi",
      "Portfolio namunasi (hatto o‘quv loyihalari)",
    ],
    benefits: [
      "Senior dizayner bilan qo‘shma sessiyalar",
      "Ishdan keyin to‘liq vaqt taklifi imkoniyati",
      "Studiya ichida tadbirlar",
    ],
  },
  {
    id: "data-entry-tashkent",
    title: "Ma’lumotlarni kiritish yordamchisi",
    company: "LogiChain",
    salary: "3 200 000 – 4 000 000 so‘m / oy",
    location: "Toshkent",
    type: "Part-time",
    tags: ["Flexible", "Remote"],
    shortDescription:
      "Jadvallarni yangilash, hisobotlar uchun ma’lumotlarni tekshirish.",
    description:
      "Logistika startapi. Uydan yoki ofisdan ishlash mumkin. Detallarga e’tibor muhim.",
    responsibilities: [
      "Excel/Google Sheets da katta jadvallarni yangilash",
      "Xatolarni aniqlash va tekshirish",
      "Kichik hisobotlar tayyorlash",
    ],
    requirements: [
      "Tez yozish va diqqat",
      "Asosiy Excel funksiyalari",
      "Haftada kamida 16 soat",
    ],
    benefits: [
      "Masofaviy format",
      "Aniq topshiriqlar va deadline",
      "Jamoada yumshoq menejment",
    ],
  },
  {
    id: "customer-support-remote",
    title: "Mijozlarni qo‘llab-quvvatlash mutaxassisi",
    company: "PayEasy",
    salary: "4 500 000 – 5 500 000 so‘m / oy",
    location: "Onlayn",
    type: "Remote",
    tags: ["Remote", "Shift", "Student-friendly"],
    shortDescription:
      "Chat va email orqali to‘lovlar, hisob va umumiy savollar bo‘yicha yordam.",
    description:
      "To‘lov xizmatlari startapi. 24/7 qo‘llab-quvvatlash modeli — smenalar talabalar uchun moslashtirilgan.",
    responsibilities: [
      "Ticketlarni javoblash va yo‘naltirish",
      "Incidentslarni loglash",
      "FAQ yangilash uchun takliflar",
    ],
    requirements: [
      "Xushmuomala yozish uslubi",
      "Texnik savollarni soddalashtirish qobiliyati",
      "Ingliz tili (asosiy daraja)",
    ],
    benefits: [
      "To‘liq masofaviy",
      "Smena bonuslari",
      "Ichki bilim bazasi va treninglar",
    ],
  },
  {
    id: "barista-parttime-tashkent",
    title: "Barista (qisman bandlik)",
    company: "Bean & Co",
    salary: "soatiga 35 000 – 45 000 so‘m + chay",
    location: "Toshkent",
    type: "Part-time",
    tags: ["Flexible", "Student-friendly"],
    shortDescription:
      "Kofe tayyorlash, kassirlik va mehmonxona tartibini saqlash.",
    description:
      "Markaziy kofe zanjirasi. Talabalar uchun ertalab va kechki smenalar.",
    responsibilities: [
      "Espresso va sutli ichimliklar",
      "Kassa va mini-inventarizatsiya",
      "Mehmonlarga pozitiv xizmat",
    ],
    requirements: [
      "Xushmuomalalik",
      "Tez o‘rganishga tayyorlik",
      "Sog‘lom turmush tarzi (ovqatlanish sohasi)",
    ],
    benefits: [
      "Ichki o‘qitish",
      "Ishchi kiyim",
      "Chegirmalar va ichki eventlar",
    ],
  },
  {
    id: "fulltime-junior-analyst",
    title: "Junior biznes tahlilchisi",
    company: "NorthStar Consulting",
    salary: "9 000 000 – 11 000 000 so‘m / oy",
    location: "Toshkent",
    type: "Full-time",
    tags: ["Career track"],
    shortDescription:
      "Excel va oddiy BI vositalari bilan hisobotlar, bozor va mijoz tahlili.",
    description:
      "Konsalting firmasi. Bitiruvchilarga mos entry-level lavozim. Ofis + ba’zan masofaviy kunlar.",
    responsibilities: [
      "Ma’lumotlarni yig‘ish va vizualizatsiya",
      "Taqqoslovchi jadvallar",
      "Mijoz uchrashuvlariga tayyorgarlik",
    ],
    requirements: [
      "Iqtisod yoki IT yo‘nalishi bo‘yicha bakalavr",
      "Excel (pivot, asosiy formula)",
      "Ingliz tili o‘qish darajasi",
    ],
    benefits: [
      "Sog‘liq sug‘urtasi",
      "Katta loyihalar bilan ishlash",
      "Yillik o‘sish rejalari",
    ],
  },
];

export function getJobById(id: string): Job | undefined {
  return jobs.find((j) => j.id === id);
}

export function getFeaturedJobs(limit = 3): Job[] {
  return jobs.slice(0, limit);
}
