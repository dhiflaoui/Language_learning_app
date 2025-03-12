import { InfinityIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import NextLink from "next/link";

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
      <NextLink href="/courses" passHref>
        <Button variant="ghost" asChild>
          <div>
            <Image
              src={activeCourse.imageSrc}
              alt={activeCourse.title}
              width={32}
              height={32}
            />
          </div>
        </Button>
      </NextLink>
      <NextLink href="/shop" passHref>
        <Button variant="ghost" className="text-orange-500" asChild>
          <div>
            <Image
              src="/points.svg"
              alt="Points"
              height={28}
              width={28}
              className="mr-2"
            />
            {points}
          </div>
        </Button>
      </NextLink>
      <NextLink href="/shop" passHref>
        <Button variant="ghost" className="text-rose-500" asChild>
          <div>
            <Image
              src="/heart.svg"
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
          </div>
        </Button>
      </NextLink>
    </div>
  );
}
