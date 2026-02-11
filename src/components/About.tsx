"use client";

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
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">
              Why BR1CK3D
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3 mb-6">
              Built Different.{" "}
              <span className="gradient-text">Built to Last.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              We&apos;re not a massive agency with layers of project managers
              between you and the engineers. At BR1CK3D, you work directly with
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

          {/* Right — Visual / Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-bg-card border border-border rounded-xl p-6 font-mono text-sm overflow-hidden glow-primary">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-error/80" />
                <div className="w-3 h-3 rounded-full bg-warning/80" />
                <div className="w-3 h-3 rounded-full bg-success/80" />
                <span className="ml-2 text-text-muted text-xs">
                  br1ck3d-project
                </span>
              </div>
              {/* Code lines */}
              <div className="space-y-1 text-[13px]">
                <p>
                  <span className="text-secondary-light">const</span>{" "}
                  <span className="text-primary">project</span>{" "}
                  <span className="text-text-muted">=</span>{" "}
                  <span className="text-text-muted">{"{"}</span>
                </p>
                <p className="pl-4">
                  <span className="text-success">name</span>
                  <span className="text-text-muted">:</span>{" "}
                  <span className="text-warning">
                    &quot;your-next-big-idea&quot;
                  </span>
                  <span className="text-text-muted">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-success">platforms</span>
                  <span className="text-text-muted">:</span>{" "}
                  <span className="text-text-muted">[</span>
                  <span className="text-warning">&quot;ios&quot;</span>
                  <span className="text-text-muted">,</span>{" "}
                  <span className="text-warning">&quot;android&quot;</span>
                  <span className="text-text-muted">,</span>{" "}
                  <span className="text-warning">&quot;web&quot;</span>
                  <span className="text-text-muted">],</span>
                </p>
                <p className="pl-4">
                  <span className="text-success">timeline</span>
                  <span className="text-text-muted">:</span>{" "}
                  <span className="text-warning">&quot;weeks&quot;</span>
                  <span className="text-text-muted">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-success">quality</span>
                  <span className="text-text-muted">:</span>{" "}
                  <span className="text-warning">
                    &quot;production-ready&quot;
                  </span>
                  <span className="text-text-muted">,</span>
                </p>
                <p>
                  <span className="text-text-muted">{"}"}</span>
                  <span className="text-text-muted">;</span>
                </p>
                <p className="mt-3">
                  <span className="text-secondary-light">await</span>{" "}
                  <span className="text-primary">br1ck3d</span>
                  <span className="text-text-muted">.</span>
                  <span className="text-success">build</span>
                  <span className="text-text-muted">(</span>
                  <span className="text-primary">project</span>
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
