import { cn } from "@/lib/utils";
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
      <h1>Sidebar</h1>
    </div>
  );
}
