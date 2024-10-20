"use client";
import Link from "next/link";
import React from "react";

export const Navigation: React.FC = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Working experiences", href: "/working-experiences" },
    { name: "Academic degrees", href: "/academic-degrees" },
    { name: "Course certificates", href: "/course-certificates" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <nav className="md:my-20 py-20">
        <ul className="flex items-center justify-center gap-4 flex-col">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-3xl text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};
