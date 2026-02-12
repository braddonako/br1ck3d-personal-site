"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Monitor,
  Rocket,
  Code2,
  Database,
} from "lucide-react";

const SERVICES = [
  {
    icon: Smartphone,
    title: "iOS Development",
    description:
      "Native iOS apps built with Swift and SwiftUI. Pixel-perfect interfaces that feel right at home on iPhone and iPad.",
  },
  {
    icon: Smartphone,
    title: "Android Development",
    description:
      "Native Android apps with Kotlin and Jetpack Compose. Smooth performance across the full Android ecosystem.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Modern web apps with React, Next.js, and cutting-edge frameworks. Responsive, fast, and SEO-friendly.",
  },
  {
    icon: Monitor,
    title: "Desktop Software",
    description:
      "Cross-platform desktop applications that run on macOS, Windows, and Linux with native-like performance.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "Get your minimum viable product to market fast. We strip away the noise and build what matters to validate your idea.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Scalable backend systems, REST and GraphQL APIs, cloud infrastructure, and database architecture.",
  },
] as const;

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
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
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3 mb-5">
            Full-Stack, Full-Platform
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From a single screen to a multi-platform ecosystem — we have the
            expertise to build it all.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative bg-bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:bg-bg-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3 text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
