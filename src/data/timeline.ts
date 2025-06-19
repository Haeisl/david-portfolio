import { TimelineItem, TFunction } from "@/types";

export function getTimelineData(t: TFunction): TimelineItem[] {
  return [
    {
      id: "bsc",
      type: "education",
      title: t("bsctitle"),
      subtitle: t("unititle"),
      start: "2018-10",
      end: "2025-03",
      description: t("bscdescription"),
    },
    {
      id: "abi",
      type: "education",
      title: "Abitur",
      subtitle: "Hölderlin-Gymnasium Heidelberg",
      start: "2009-09",
      end: "2017-09",
      description: t("abiturdescription"),
    },
    {
      id: "schoolinternship",
      type: "work",
      title: t("schoolinternshiptitle"),
      subtitle: t("schoolinternshipsubtitle"),
      start: "2015-06",
      end: "2015-07",
    },
    {
      id: "waitge",
      type: "education",
      title: t("waitingtitle"),
      subtitle: t("unititle"),
      start: "2025-03",
      end: "2025-05",
      description: t("waitingdescription"),
    },
    {
      id: "jobsearch",
      type: "work",
      title: t("jobsearchtitle"),
      subtitle: t("jobsearchsubtitle"),
      start: "2025-06",
      description: t("jobsearchdescription"),
    },
  ];
}
