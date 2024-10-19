"use client";
import Link from "next/link";
import { Card } from "../components/card";

interface PositionAtWorkProps {
  id: number;
  name: string;
  nameIt: string;
  nameItaly: string;
}

interface CompanyProps {
  id: number;
  name: string;
  nameIt: string;
  location: string;
  locationIt: string;
}

interface CustomerWorkingExperienceProps {
  id: number;
  positionAtWork: PositionAtWorkProps;
  company: CompanyProps;
  jobDescription?: string;
  jobDescriptionIt?: string;
  startedWork: string;
  finishedWork: string;
}
async function getCustomerWorkingExperience(): Promise<CustomerWorkingExperienceProps> {
  const apiUrl = process.env.API_URL;
  const customerId = process.env.CUSTOMER_ID;

  const res = await fetch(`${apiUrl}api/v1/customer/${customerId}/working-experience/all`, {
    cache: "no-store", // Ensure fresh data is fetched for every request
  });

  if (!res.ok) {
    throw new Error("Failed to fetch customer data");
  }

  const customerWorkingExperience = (await res.json()) as CustomerWorkingExperienceProps;

  return customerWorkingExperience;
}

const socials = [
  {
    href: "tel:+393339616598",
    label: "Phone",
    handle: "+393339616508",
  },
  {
    href: "https://instagram.com/holovin777",
    label: "Instagram",
    handle: "@holovin777",
  },
  {
    href: "https://twitter.com/holovin777",
    label: "Twitter",
    handle: "@holovin777",
  },
  {
    href: "mailto:holovin@mail.com",
    label: "Email",
    handle: "holovin@mail.com",
  },
  {
    href: "https://github.com/holovin777",
    label: "Github",
    handle: "@holovin777",
  },
  {
    href: "https://innomarts.com",
    label: "Blog",
    handle: "innomarts.com",
  },
  {
    href: "https://maps.app.goo.gl/wAqtR7Wc11MKUfND7",
    label: "Location",
    handle: "Vigevano, Italy",
  },
];

export default async function Example() {

  const customerWorkingExperience = await getCustomerWorkingExperience();
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <nav className="flex flex-col items-center justify-center w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black p-4 text-3xl">
        <Link
          href="/menu"
          className="text-lm duration-500 text-zinc-500 hover:text-zinc-300"
        >
          Menu
        </Link>
      </nav>
      <div className="container flex items-center justify-center min-h-screen m-2 p-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
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
    </div>
  );
}
