import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import logo from "../../../public/logo.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

const navItems = [
  { name: "Profil", href: "/" },
  { name: "Kegiatan", href: "/kegiatan" },
  { name: "Galeri", href: "/galeri" },
  { name: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  return (
    <div className="container border flex justify-between py-3">
      <nav className="flex gap-x-6 font-bold">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="">
            {item.name}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger></SheetTrigger>
        <SheetContent>
          <div>
            <SheetTitle className="mt-5 text-center">
              Majelis Ta&apos;lim At-ta&apos;awun
            </SheetTitle>
            <SheetDescription>
              <nav className="flex flex-col justify-center items-center text-xl space-y-6 pt-5 font-bold">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} className="">
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetDescription>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
