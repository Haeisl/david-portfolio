interface SkillBarProps {
  skill: string;
  level: number; // 0 to 100
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        {/* <span className="text-sm text-textaltlight dark:text-textaltdark">
          {level}%
        </span> */}
      </div>
      <div className="w-full bg-bgselectedlight dark:bg-bgselecteddark rounded-full h-3">
        <div
          className="bg-primary dark:bg-primarydark h-3 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
