import Link from "next/link";

export function Contacts() {
  return (
    <div className="flex gap-4 items-center justify-center my-10">
      <Link
        href="https://x.com/Hemantsh03"
        className="p-5 rounded-full backdrop-blur-lg border border-black/10 dark:border-white/10 bg-linear-to-tr from-black/10 to-black/20 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-linear-to-tr hover:from-white/20 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-r from-transparent dark:via-white/10 via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <img
            src="/x-logo.png"
            alt="icon"
            className="w-7 h-7 transition-opacity duration-300 group-hover:opacity-90 dark:invert"
          />
        </div>
      </Link>

      <Link
        href="https://www.linkedin.com/in/hemant003/"
        className="p-5 rounded-full backdrop-blur-lg border border-blue-500/20 bg-linear-to-tr from-black/10 to-black/20 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-linear-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-r from-transparent dark:via-blue-400/40 via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <img
            src="/linkedin-logo.png"
            alt="icon"
            className="w-7 h-7 transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>
      </Link>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=hemantsh003@gmail.com"
        className="p-5 rounded-full backdrop-blur-lg border border-red-500/20 bg-linear-to-tr from-black/10 to-black/20 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 hover:bg-linear-to-tr hover:from-red-500/10 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-r from-transparent dark:via-red-400/20 via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <img
            src="/gmail-logo.svg"
            alt="icon"
            className="w-7 h-7 transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>
      </a>

      <Link
        href="https://wa.me/9582492114"
        className="p-5 rounded-full backdrop-blur-lg border border-green-500/20 bg-linear-to-tr from-black/10 to-black/20 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-green-500/50 hover:bg-linear-to-tr hover:from-green-500/10 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-r from-transparent dark:via-green-400/20 via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <img
            src="/whatsapp-logo.png"
            alt="icon"
            className="w-7 h-7 transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>
      </Link>
    </div>
  );
}
