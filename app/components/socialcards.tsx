"use client";

import { Card } from "./card";
import { Github, Mail, Instagram, Phone, LocateIcon, Webcam } from "lucide-react";
import Link from "next/link";

interface CustomerProps {
  phoneNumber: string;
  email: string;
  blog: string;
  residence: string;
}

export default function SocialCards({ customer }: { customer: CustomerProps }) {
  const socials = [
    {
      icon: <Phone size={20} />,
      href: `tel:${customer.phoneNumber}`,
      label: "Phone",
      handle: `${customer.phoneNumber}`,
    },
    {
      icon: <Instagram size={20} />,
      href: "https://instagram.com/holovin777",
      label: "Instagram",
      handle: "@holovin777",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://facebook.com/holovin",
      label: "Facebook",
      handle: "@holovin",
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${customer.email}`,
      label: "Email",
      handle: `${customer.email}`,
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/holovin777",
      label: "Github",
      handle: "@holovin777",
    },
    {
      icon: <Webcam size={20} />,
      href: `${customer.blog}`,
      label: "Blog",
      handle: `${customer.blog}`,
    },
    {
      icon: <LocateIcon size={20} />,
      href: "https://maps.app.goo.gl/wAqtR7Wc11MKUfND7",
      label: "Location",
      handle: `${customer.residence}`,
    },
  ];

  return (
    <div className="container flex items-center justify-center min-h-screen m-2 p-4 mx-auto">
      <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
        {socials.map((s) => (
          <Card key={s.label}>
            <Link
              href={s.href}
              target="_blank"
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
            >
              <span
                className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                {s.icon}
              </span>{" "}
              <div className="z-10 flex flex-col items-center">
                <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                  {s.handle}
                </span>
                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  {s.label}
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}