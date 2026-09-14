"use client";

import { motion } from "motion/react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { QUALIFY } from "./data";
import { H2_CLASS, Hairlines, Rails } from "./rails";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } } };

/** Three dark cards (blue icon disc, title, body) that stagger into view when scrolled to. */
export function QualifyCards() {
  return (
    <section className="relative border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:pb-16">
      <Rails width={1600} />
      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-6">
        <h2 className={`px-6 ${H2_CLASS}`}>{QUALIFY.heading}</h2>
        <motion.div
          className="relative grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <Hairlines zIndex="z-0" />
          {QUALIFY.cards.map((card) => (
            <motion.article key={card.title} variants={item} className="relative z-20 flex flex-col gap-5 overflow-hidden rounded-[8px] bg-[#313131] p-5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[#5b7fff]">
                <MaterialIcon name={card.icon} size={24} className="text-white" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-mono text-[24px] leading-none tracking-[-0.768px] text-white">{card.title}</h3>
                <p className="text-[14px] leading-[1.2] tracking-[-0.21px] text-[#ddd]">{card.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
