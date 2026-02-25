import type { Dictionary, Locale } from "@/lib/getDictionary";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  dict: Dictionary;
  lang: Locale;
};

export default function Header({ dict, lang }: Props) {
  const cvPath =
    lang === "tr"
      ? "/cv/Emir_Kaan_Oğşarim_CV.pdf"
      : "/cv/Emir_Kaan_Ogsarim_CV.pdf";

  const uni = dict.hero.university;

  return (
    <div className="text-center space-y-4 mb-10">
      {/* DİL DEĞİŞTİRİCİ */}
      <div className="flex justify-end">
        <LanguageSwitcher lang={lang} />
      </div>

      {/* İSİM */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#2B2D42] tracking-tight">
        Emir Kaan Oğşarim
      </h1>

      {/* AVATAR */}
      <div className="flex justify-center">
        <img
          src="/avatar.png"
          className="w-36 h-36 rounded-full border-4 border-[#3A6EA5] shadow-md"
          alt="Emir Kaan Oğşarim"
        />
      </div>

      {/* ALT BAŞLIK */}
      <p className="text-[#8D99AE] max-w-md mx-auto leading-relaxed">
        {dict.hero.subtitle}
      </p>

      {/* ÜNİVERSİTE BADGE */}
      <div className="flex items-center gap-3 max-w-sm mx-auto bg-white/60 border border-[#D9E8F5] rounded-2xl px-4 py-3 shadow-sm">
        <img
          src="/fsm-logo.png"
          alt="FSM Üniversitesi"
          className="w-12 h-12 rounded-full object-contain border-2 border-[#C8DCF0] bg-white flex-shrink-0"
        />
        <div className="text-left leading-snug">
          <p className="text-[13px] font-semibold text-[#2B2D42] leading-tight">
            {uni.name}
          </p>
          <p className="text-[12px] text-[#3A6EA5] font-medium">
            {uni.department}
          </p>
          <p className="text-[11px] text-[#8D99AE] mt-0.5">
            {uni.year}&nbsp;·&nbsp;{uni.graduation}&nbsp;·&nbsp;{uni.gpa}
          </p>
        </div>
      </div>

      {/* LINKLER */}
      <div className="flex justify-center gap-4 pt-2 flex-wrap">
        <a
          href={cvPath}
          download
          className="px-4 py-2 rounded-full border border-[#E6F0F8] bg-white/70 text-[#3A6EA5] hover:text-[#3A6EA5] hover:border-[#7FB3D5] transition font-medium"
        >
          {dict.nav.downloadCV}
        </a>

        <a
          href="https://github.com/0gsar1m"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full border border-[#E6F0F8] bg-white/70 text-[#3A6EA5] hover:text-[#3A6EA5] hover:border-[#7FB3D5] transition font-medium"
        >
          {dict.nav.github}
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full border border-[#E6F0F8] bg-white/70 text-[#3A6EA5] hover:text-[#3A6EA5] hover:border-[#7FB3D5] transition font-medium"
        >
          {dict.nav.linkedin}
        </a>
      </div>
    </div>
  );
}