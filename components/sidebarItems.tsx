"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  icon: any;
  label: string;
  href: string;
};
export default function SidebarItem({ icon, label, href }: Props) {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Button
      variant={isActive ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <Image src={icon} height={32} width={32} alt={label} className="mr-5" />
        {label}
      </Link>
    </Button>
  );
}
