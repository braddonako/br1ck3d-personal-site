"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, User, Briefcase } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

const PROJECT_TYPES = [
  "Mobile App (iOS / Android)",
  "Web Application",
  "Desktop Application",
  "MVP / Prototype",
  "Full-Stack Platform",
  "Other",
] as const;

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "inquiries"), {
        ...form,
        createdAt: serverTimestamp(),
        status: "new",
      });

      toast.success("Message sent! We'll be in touch soon.");
      setForm(INITIAL_FORM);
    } catch {
      toast.error(
        "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full bg-bg-dark border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all duration-200 text-[15px]";

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-bg-card/50">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3 mb-6">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something Great.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              Have an idea? Need a team to bring it to life? Fill out the form
              and we&apos;ll get back to you within 24 hours to discuss your
              project.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail size={22} className="text-primary" />
                </div>
                <div>
                  <div className="text-text-muted text-sm">Email</div>
                  <div className="text-text-primary font-medium">
                    hello@br1ck3d.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare size={22} className="text-primary" />
                </div>
                <div>
                  <div className="text-text-muted text-sm">Response Time</div>
                  <div className="text-text-primary font-medium">
                    Within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-bg-card border border-border rounded-xl p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-text-secondary text-sm font-medium mb-1.5 flex items-center gap-2"
                >
                  <User size={14} />
                  Name <span className="text-error">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-text-secondary text-sm font-medium mb-1.5 flex items-center gap-2"
                >
                  <Mail size={14} />
                  Email <span className="text-error">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="text-text-secondary text-sm font-medium mb-1.5 flex items-center gap-2"
                >
                  <Briefcase size={14} />
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Acme Inc."
                  value={form.company}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="text-text-secondary text-sm font-medium mb-1.5 flex items-center gap-2"
                >
                  <Briefcase size={14} />
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select a project type...</option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-text-secondary text-sm font-medium mb-1.5 flex items-center gap-2"
                >
                  <MessageSquare size={14} />
                  Tell Us About Your Project{" "}
                  <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your idea, timeline, and any specifics..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-bg-dark py-3.5 rounded-lg font-semibold text-base hover:bg-primary-light transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
