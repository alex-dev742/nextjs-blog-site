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
    <header>
      <Image
        src={Logo}
        alt="Logo"
        className="w-[35px] h-[35px]"
        width="35"
        height="35"
      />

      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
