import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { AccordionItem } from "@/components/Accordion";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export default function Page() {
  
  return (

    
    <div className="space-y-8">
      <Header />

      <section className="space-y-4 mt-10">
        <SectionTitle title="Deneyim" />
        {experience.map((e, i) => (
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
              <b>Teknolojiler:</b> {e.tech.join(", ")}
            </p>
          </AccordionItem>
        ))}
      </section>

      <section className="space-y-3">
        <SectionTitle title="Projeler" />
        {projects.map((p, i) => (
          <AccordionItem key={i} title={p.name}>
            <p>{p.desc}</p>
            <p className="text-sm">
              <b>Teknolojiler:</b> {p.tech.join(", ")}
            </p>
            <a href={p.link} target="_blank">
              Projeye git →
            </a>
          </AccordionItem>
        ))}
      </section>

      <section className="space-y-3">
        <SectionTitle title="Teknolojik Yetenekler" />

        <AccordionItem title="Programlama Dilleri">
          <ul className="list-disc pl-5">
            {skills.programming.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem title="AI / Data">
          <ul className="list-disc pl-5">
            {skills.ai.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem title="Araçlar">
          <ul className="list-disc pl-5">
            {skills.tools.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </AccordionItem>
      </section>
    </div>
  );
}