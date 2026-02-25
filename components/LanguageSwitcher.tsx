"use client";

import { usePathname, useRouter } from "next/navigation";

type Props = {
    lang: "tr" | "en";
};

export default function LanguageSwitcher({ lang }: Props) {
    const pathname = usePathname();
    const router = useRouter();

    function switchLang(newLang: "tr" | "en") {
        // /tr/... veya /en/... → yeni dille değiştir
        const segments = pathname.split("/");
        segments[1] = newLang;
        router.push(segments.join("/") || "/");
    }

    return (
        <div className="flex items-center gap-1 rounded-full border border-[#E6F0F8] bg-white/70 p-1">
            <button
                onClick={() => switchLang("tr")}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${lang === "tr"
                        ? "bg-[#3A6EA5] text-white shadow-sm"
                        : "text-[#3A6EA5] hover:bg-[#E6F0F8]"
                    }`}
                aria-label="Türkçe"
            >
                TR
            </button>
            <button
                onClick={() => switchLang("en")}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${lang === "en"
                        ? "bg-[#3A6EA5] text-white shadow-sm"
                        : "text-[#3A6EA5] hover:bg-[#E6F0F8]"
                    }`}
                aria-label="English"
            >
                EN
            </button>
        </div>
    );
}
