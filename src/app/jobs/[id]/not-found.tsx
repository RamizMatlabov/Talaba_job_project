import Link from "next/link";

export default function JobNotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-2xl font-bold text-slate-900">Vakansiya topilmadi</h1>
      <p className="mt-2 text-slate-600">
        Ushbu e’lon mavjud emas yoki olib tashlangan bo‘lishi mumkin.
      </p>
      <Link href="/jobs" className="btn-primary mt-8">
        Ishlar ro‘yxatiga qaytish
      </Link>
    </div>
  );
}
