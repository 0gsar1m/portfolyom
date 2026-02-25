import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { AccordionItem } from "@/components/Accordion";
import { getDictionary, type Locale } from "@/lib/getDictionary";

export async function generateStaticParams() {
    return [{ lang: "tr" }, { lang: "en" }];
}

type Props = {
    params: Promise<{ lang: Locale }>;
};

export default async function Page({ params }: Props) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <div className="space-y-8">
            <Header dict={dict} lang={lang} />

            {/* DENEYİM / EXPERIENCE */}
            <section className="space-y-4 mt-10">
                <SectionTitle title={dict.sections.experience} />
                {dict.experience.map((e, i) => (
                    <AccordionItem
                        key={i}
                        title={`${e.company} - ${e.role} (${e.date})`}
                    >
                        <p>{e.summary}</p>
                        <ul className="list-disc pl-5">
                            {e.bullets.map((b, idx) => (
                                <li key={idx}>{b}</li>
                            ))}
                        </ul>
                        <p className="text-sm mt-2">
                            <b>{lang === "tr" ? "Teknolojiler:" : "Tech:"}</b>{" "}
                            {e.tech.join(", ")}
                        </p>
                    </AccordionItem>
                ))}
            </section>

            {/* PROJELER / PROJECTS */}
            <section className="space-y-3">
                <SectionTitle title={dict.sections.projects} />
                {dict.projects.map((p, i) => (
                    <AccordionItem key={i} title={p.name}>
                        <p>{p.desc}</p>
                        <p className="text-sm">
                            <b>{lang === "tr" ? "Teknolojiler:" : "Tech:"}</b>{" "}
                            {p.tech.join(", ")}
                        </p>
                        <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3A6EA5] hover:underline"
                        >
                            {p.linkLabel}
                        </a>
                    </AccordionItem>
                ))}
            </section>

            {/* YETENEKler / SKILLS */}
            <section className="space-y-3">
                <SectionTitle title={dict.sections.skills} />

                <AccordionItem title={dict.skills.programming}>
                    <ul className="list-disc pl-5">
                        {["Python", "Java", "C/C++", "C#", "JavaScript", "SQL"].map(
                            (s, i) => (
                                <li key={i}>{s}</li>
                            )
                        )}
                    </ul>
                </AccordionItem>

                <AccordionItem title={dict.skills.ai}>
                    <ul className="list-disc pl-5">
                        {["Machine Learning", "Data Processing", "Feature Engineering"].map(
                            (s, i) => (
                                <li key={i}>{s}</li>
                            )
                        )}
                    </ul>
                </AccordionItem>

                <AccordionItem title={dict.skills.tools}>
                    <ul className="list-disc pl-5">
                        {["Git", "Docker", "Redis", "AWS EC2", "FastAPI", "Streamlit"].map(
                            (s, i) => (
                                <li key={i}>{s}</li>
                            )
                        )}
                    </ul>
                </AccordionItem>
            </section>
        </div>
    );
}
