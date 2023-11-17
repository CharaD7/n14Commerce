"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

// Create links to pages
const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-4xl font-bold">N14<span className="text-primary">Commerce</span></h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map(( link, idx ) => (
            <div key={ idx }>
              { pathname === link.href ? (
                <Link className="text-lg font-semibold text-primary" href={ link.href }>{ link.name }</Link>
              ) : (
                <Link className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary" href={ link.href }>{ link.name }</Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
