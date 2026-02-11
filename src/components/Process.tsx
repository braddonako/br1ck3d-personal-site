"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description:
      "We learn about your vision, goals, and timeline. No commitments — just a conversation to see if we're a good fit.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Scope & Plan",
    description:
      "We define the MVP features, choose the right tech stack, and create a clear project roadmap with milestones.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build & Iterate",
    description:
      "We build in short sprints with weekly demos. You see progress constantly and provide feedback in real time.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy your product to the App Store, Play Store, or web — and stick around for post-launch support and iteration.",
  },
] as const;

function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3 mb-5">
            From Idea to Launch
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A proven process designed to move fast without cutting corners.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="text-6xl font-bold font-mono text-border mb-4">
                  {step.step}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-heading mb-2 text-text-primary">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
