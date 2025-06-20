"use client";

import { useTranslations } from "next-intl";
import { useMediaQuery } from "../general/useMediaQuery";

export default function Legend() {
  const t = useTranslations("ProjectsPage");
  const isMediumUp = useMediaQuery("(min-width: 768px)"); // Tailwind's md breakpoint

  const getLabel = (key: string) =>
    t(`${key}.${isMediumUp ? "large" : "small"}`);

  return (
    <div>
      <h2 className="text-xl font-semibold">{t("legend")}</h2>
      <div className="flex space-x-4 text-sm md:text-base">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-l-4 border-blue-500" />
          <span>{getLabel("thesis")}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-l-4 border-green-500" />
          <span>{getLabel("practical")}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-l-4 border-purple-500" />
          <span>{getLabel("private")}</span>
        </div>
      </div>
    </div>
  );
}
