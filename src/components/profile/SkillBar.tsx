import { SkillBarProps } from "@/types";

export default function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
      </div>
      <div className="w-full bg-bgselectedlight dark:bg-bgselecteddark rounded-full h-3">
        <div
          className="bg-[var(--color-primary)] dark:bg-[var(--color-primarydark)] h-3 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
