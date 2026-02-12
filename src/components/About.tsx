"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ADVANTAGES = [
  "Rapid MVP delivery — weeks, not months",
  "Full-stack expertise across mobile, web, and desktop",
  "Clean, maintainable code from day one",
  "Transparent communication and weekly demos",
  "Scalable architecture that grows with your business",
  "Post-launch support and iteration",
] as const;

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-bg-card/50">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">
              Why BRICK3D
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3 mb-6">
              Built Different.{" "}
              <span className="gradient-text">Built to Last.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              We&apos;re not a massive agency with layers of project managers
              between you and the engineers. At BRICK3D, you work directly with
              senior developers who understand both the business and the code.
              The result? Faster delivery, fewer miscommunications, and software
              that actually solves your problem.
            </p>
            <div className="space-y-4">
              {ADVANTAGES.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span className="text-text-primary text-[15px]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Photo + Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex flex-col gap-6"
          >
            {/* Founder Photo */}
            <div className="relative rounded-xl overflow-hidden border border-border glow-primary">
              <Image
                src="/founder.png"
                alt="BRICK3D Founder"
                width={600}
                height={750}
                className="w-full max-h-[520px] object-cover object-top"
                priority={false}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-dark/90 to-transparent p-6">
                <p className="text-text-primary font-semibold text-lg">
                  Brad Donakowski
                </p>
                <p className="text-primary text-sm font-mono">
                  Founder &amp; Lead Engineer
                </p>
              </div>
            </div>

            {/* Code Block */}
            <div className="bg-bg-card border border-border rounded-xl p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-error/80" />
                <div className="w-3 h-3 rounded-full bg-warning/80" />
                <div className="w-3 h-3 rounded-full bg-success/80" />
                <span className="ml-2 text-text-muted text-xs">
                  brick3d-project
                </span>
              </div>
              <div className="space-y-1 text-[13px]">
                <p>
                  <span className="text-secondary-light">await</span>{" "}
                  <span className="text-primary">brick3d</span>
                  <span className="text-text-muted">.</span>
                  <span className="text-success">build</span>
                  <span className="text-text-muted">(</span>
                  <span className="text-warning">&quot;your-idea&quot;</span>
                  <span className="text-text-muted">);</span>
                </p>
                <p className="text-text-muted mt-1">
                  <span className="text-text-muted">// </span>
                  <span className="text-text-muted animate-pulse">
                    Shipping...
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
