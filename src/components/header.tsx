import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/Logo.jpg";

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
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        {" "}
        <Image src={Logo} alt="Logo" className="w-[50px] h-[50px] rounded-xl" />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className="text-zinc-400" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
