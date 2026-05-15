import type { ReactNode } from "react";

type TimelineItemProps = {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
};

export default function TimelineItem({
  number,
  icon,
  title,
  description,
}: TimelineItemProps) {
  return (
    <div className="grid grid-cols-[40px_1fr] items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#315D2C] text-lg font-bold text-white">
        {number}
      </span>
      <div className="flex min-h-15 items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white/75 px-4 py-2">
        <span className="flex h-8 w-8 items-center justify-center text-[#264E1E]">
          {icon}
        </span>
        <div>
          <strong className="block text-xl font-semibold text-[#315D2C]">
            {title}
          </strong>
          <p className="text-base leading-4 text-[#010101]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}