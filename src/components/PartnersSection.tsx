"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

const partners = [
  { id: "1", name: "Les Saveurs de Kana", src: "/partner-1.png", height: 88 },
  { id: "2", name: "Partenaire 2",        src: "/partner-2.png", height: 72 },
  { id: "3", name: "Premium Packaging",   src: "/partner-3.png", height: 88 },
];

/* Triplicate for seamless infinite loop with only 3 logos */
const tripled = [...partners, ...partners, ...partners];

export default function PartnersSection() {
  const { t } = useLang();

  return (
    <section
      className="border-t overflow-hidden"
      style={{ backgroundColor: "#fafaf8", borderColor: "#e2e0d8" }}
    >
      <div className="flex items-stretch">
        {/* Fixed label */}
        <div
          className="shrink-0 flex items-center px-5 md:px-8 py-5"
          style={{ borderRight: "1px solid #e2e0d8" }}
        >
          <p
            className="text-[9px] font-black uppercase tracking-[0.22em] whitespace-nowrap"
            style={{ color: "#6b6b60" }}
          >
            {t("partners_label")}
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="overflow-hidden flex-1 flex items-center" style={{ height: "108px" }}>
          <div className="partners-track flex items-center">
            {tripled.map((p, idx) => (
              <div
                key={`${p.id}-${idx}`}
                className="shrink-0 flex items-center justify-center"
                style={{
                  height: "108px",
                  padding: "0 56px",
                }}
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={120}
                  height={120}
                  className="object-contain"
                  style={{ maxHeight: `${p.height}px`, width: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
