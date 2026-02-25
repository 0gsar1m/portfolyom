import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: [
        /*
         * Aşağıdaki path'leri eşleştirme:
         * - statik dosyalar (_next/static, _next/image, favicon.ico, public/)
         * hariç tüm path'ler
         */
        "/((?!_next/static|_next/image|favicon.ico|cv/|avatar|.*\\..*).*)$",
    ],
};

const supportedLocales = ["tr", "en"] as const;
type Locale = (typeof supportedLocales)[number];

function getLocaleFromHeader(request: NextRequest): Locale {
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    const preferred = acceptLanguage.split(",")[0].trim().slice(0, 2).toLowerCase();
    return (supportedLocales as readonly string[]).includes(preferred)
        ? (preferred as Locale)
        : "tr";
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Zaten dil prefix'i var mı?
    const hasLocale = supportedLocales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (hasLocale) return NextResponse.next();

    // Yönlendirme: Accept-Language'a göre veya varsayılan tr
    const locale = getLocaleFromHeader(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
}
