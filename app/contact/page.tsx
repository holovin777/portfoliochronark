import Link from "next/link";
import SocialCards from "../components/socialcards";

interface CustomerProps {
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

export default async function Contact() {
  const apiUrl = process.env.API_URL;
  const customerId = process.env.CUSTOMER_ID;
  const res = await fetch(`${apiUrl}api/v1/customer/${customerId}`);
  const customer = await res.json() as CustomerProps;

  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <nav className="flex flex-col items-center justify-center w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black p-4 text-3xl">
        <Link href="/menu" className="text-lm duration-500 text-zinc-500 hover:text-zinc-300">
          Contact
        </Link>
      </nav>

      <SocialCards customer={customer} />
    </div>
  );
}