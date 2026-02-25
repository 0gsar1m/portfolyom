"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  durationMs?: number; // örn 200
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  durationMs = 200,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number>(0);
  const innerRef = useRef<HTMLDivElement | null>(null);

  // İçerik yükseklik ölçümü (SSR uyumlu)
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (!innerRef.current) return;
    // başlangıçta açık ise doğru yüksekliği al
    setHeight(defaultOpen ? innerRef.current.scrollHeight : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!innerRef.current) return;

    if (open) {
      // Açılırken gerçek yüksekliğe animasyon
      setHeight(innerRef.current.scrollHeight);
    } else {
      // Kapanırken 0'a animasyon
      setHeight(0);
    }
  }, [open]);

  // İçerik dinamik değişirse (ör. font yüklenmesi), açıkken tekrar ölç
  useEffect(() => {
    if (!innerRef.current) return;
    if (!open) return;

    const el = innerRef.current;
    const ro = new ResizeObserver(() => {
      setHeight(el.scrollHeight);
    });
    ro.observe(el);

    return () => ro.disconnect();
  }, [open]);

  return (
    <div className="rounded-2xl border border-slate-200/50 bg-[#E6F0F8] shadow-soft">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-2xl bg-[#3A6EA5] px-5 py-4 text-white font-semibold text-[16px] md:text-[17px] tracking-[0.2px]"
        aria-expanded={open}
      >
        <span>{title}</span>
        <span
          className={`ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      <div
        className="overflow-hidden"
        style={{
          height,
          transition: `height ${durationMs}ms cubic-bezier(0.25, 0.8, 0.25, 1)`,
        }}
      >
        <div ref={innerRef} className="px-5 py-4 text-slate-700 space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
}