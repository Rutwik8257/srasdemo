import { motion } from "motion/react";
import { memo, type ReactNode } from "react";

type Props = { eyebrow: string; title: string; children?: ReactNode; image?: string };

export const PageHero = memo(function PageHero({ eyebrow, title, children, image }: Props) {
  return (
    <section className="hero-navy relative overflow-hidden text-navy">
      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
      )}
      <div className="container-x relative py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.28em] text-gold"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] md:text-5xl"
        >
          {title}
        </motion.h1>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
});
