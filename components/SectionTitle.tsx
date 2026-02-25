export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-[#3A6EA5] tracking-tight border-b border-slate-300/40 pb-2">
      {title}
    </h2>
  );
}