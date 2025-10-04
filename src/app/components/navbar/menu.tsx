"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


export default function Menu() {
  const LINKS = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/contact", label: "contact" },
  ];
  const pathname = usePathname();
  return (
    <Menubar className="gap-1 rounded-2xl px-1">
      {LINKS.map(({ href, label }) => {
      const active = pathname === href;
      return (
        <MenubarMenu key={href}>
          <MenubarTrigger
            asChild
            className={[
            "cursor-pointer rounded-xl px-4 py-2 text-sm",
            active ? "bg-accent text-accent-foreground" : "",
            ].join(" ")}
            >
            <Link href={href} aria-current={active ? "page" : undefined}>
            {label}
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        );
      })}
    </Menubar>
  )
}