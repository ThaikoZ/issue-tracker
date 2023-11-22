import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const items = [
    { title: "Dashboard", href: "/" },
    { title: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {items.map((item) => (
          <li
            key={item.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
