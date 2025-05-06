import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

type NavigationType = {
  name: string;
  href: string;
};

const navigation: NavigationType[] = [
  // { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky m-10 rounded-2xl p-5 text-xl text-textlight dark:text-textdark bg-primary dark:bg-primarydark ">
      <nav className="flex justify-around">
        {/* logo */}
        <div>
          <Link href="/">
            <Image width={80} height={80} alt="Logo David Hasse" src={logo} />
          </Link>
        </div>

        {/* links */}
        {navigation.map((item: NavigationType) => (
          <div key={item.name}>
            <a href={item.href}>{item.name}</a>
          </div>
        ))}
      </nav>
    </header>
  );
}
