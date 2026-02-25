import "../../app/globals.css";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/getDictionary";

export async function generateStaticParams() {
    return [{ lang: "tr" }, { lang: "en" }];
}

type Props = {
    children: ReactNode;
    params: Promise<{ lang: Locale }>;
};

export default async function LangLayout({ children, params }: Props) {
    const { lang } = await params;
    return (
        <html lang={lang}>
            <body className="bg-[#F5F1E9] text-[#2B2D42]">
                <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>
            </body>
        </html>
    );
}
