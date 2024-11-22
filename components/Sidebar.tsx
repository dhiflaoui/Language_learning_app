import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItems from "./sidebarItems";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
type Props = {
  className?: string;
};
export default function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "h-full lg:w-[256px] lg:fixed bg-slate-200 flex left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            LingoLeap
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItems label="learn" href="/learn" icon="/learn.svg" />
        <SidebarItems
          label="leaderBoard"
          href="/leaderboard"
          icon="/leaderboard.svg"
        />
        <SidebarItems label="quests" href="/quests" icon="/quests.svg" />
        <SidebarItems label="shop" href="/shop" icon="/shop.svg" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSwitchSessionUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
}
