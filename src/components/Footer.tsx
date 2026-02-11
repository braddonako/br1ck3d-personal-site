"use client";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="border-t border-border bg-bg-dark">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold font-mono tracking-tighter text-primary">
              BR1CK3D
            </span>
            <span className="text-text-muted text-sm hidden sm:inline">
              — Software Consulting Studio
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#services"
              className="text-text-secondary hover:text-primary transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-text-secondary hover:text-primary transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#process"
              className="text-text-secondary hover:text-primary transition-colors duration-200"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-text-secondary hover:text-primary transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {CURRENT_YEAR} BR1CK3D. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-mono">
            Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
