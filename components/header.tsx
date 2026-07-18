"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Trang Chủ", path: "/" },
    { name: "Dịch Vụ", path: "/services" },
    { name: "Quy Trình", path: "/process" },
    { name: "Khu Vực", path: "/districts" },
    { name: "Hỏi Đáp", path: "/faq" },
    { name: "Liên Hệ", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-zinc-800/50 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-blue-400">
            Xuân Thành
          </span>
          <span className="text-slate-500 dark:text-zinc-400 font-light text-base">Photocopy</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  active
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-slate-600 dark:text-zinc-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "outline",
              className: "font-medium group rounded-full border-indigo-600/30 hover:border-indigo-600 dark:border-indigo-500/30 dark:hover:border-indigo-400",
            })}
          >
            Đăng Ký Tư Vấn
          </Link>
          <a
            href="tel:0984399119"
            className={buttonVariants({
              variant: "default",
              className: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 rounded-full font-semibold relative overflow-hidden group flex items-center gap-1.5",
            })}
          >
            <Phone className="w-4 h-4 animate-bounce" />
            Hotline: 0984.399.119
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 dark:text-zinc-300 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 flex flex-col gap-4 animate-in slide-in-from-top-4">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`py-1 text-base transition-colors ${
                  active
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-slate-600 dark:text-zinc-300"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-200 dark:border-zinc-800">
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "outline",
                className: "rounded-full justify-center",
              })}
              onClick={() => setMobileMenuOpen(false)}
            >
              Đăng Ký Tư Vấn
            </Link>
            <a
              href="tel:0984399119"
              className={buttonVariants({
                variant: "default",
                className: "bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold flex items-center justify-center gap-1.5",
              })}
            >
              <Phone className="w-4 h-4" />
              Gọi Ngay: 0984.399.119
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
