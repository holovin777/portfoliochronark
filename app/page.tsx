import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

interface CustomerProps {
  firstName: string;
  lastName: string;
  desiredProfession: string;
  description: string;
  phoneNumber: string;
  birthday: string;
  email: string;
  residence: string;
  residenceIt: string;
  website: string;
  blog: string;
  drivingLicense: string;
  protectedCategory: boolean;
}

async function getCustomer(): Promise<CustomerProps> {
  const apiUrl = process.env.API_URL;
  const customerId = process.env.CUSTOMER_ID;

  const res = await fetch(`${apiUrl}api/v1/customer/${customerId}`, {
    cache: "no-store", // Ensure fresh data is fetched for every request
  });

  if (!res.ok) {
    throw new Error("Failed to fetch customer data");
  }

  const customer = (await res.json()) as CustomerProps;

  return customer;
}

export default async function Home() {
  const customer = await getCustomer(); // Fetch customer data on the server

  return (
    <div className="flex flex-col items-center justify-center w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <Link
          href="/menu"
          className="text-lm duration-500 text-zinc-500 hover:text-zinc-300"
        >
          Menu
        </Link>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        {customer.firstName} {customer.lastName}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-lm text-zinc-500 m-5">{customer.description}</h2>
      </div>
    </div>
  );
}
