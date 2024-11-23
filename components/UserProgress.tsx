import { InfinityIcon, Link } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
  activeCourse: { imageSrc: string; title: string };
  hearts: number;
  points: number;
  hasActiveSubs: boolean;
  
};
export default function UserProgress({
  activeCourse,
  hearts,
  points,
  hasActiveSubs,
}: Readonly<Props>) {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image src={activeCourse.imageSrc} alt={activeCourse.title}></Image>
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/public/points.svg"
            alt="Points"
            height={28}
            width={28}
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src="/public/heart.svg"
            alt="Hearts"
            height={22}
            width={22}
            className="mr-2"
          />
          {hasActiveSubs ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
}
