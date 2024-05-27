"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/Logo.jpg";
import { usePathname } from "next/navigation";
import path from "path";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        {" "}
        <Image src={Logo} alt="Logo" className="w-[50px] h-[50px] rounded-xl" />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[14px] font-bold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
