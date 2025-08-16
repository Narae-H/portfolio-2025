import { ExperiencesData } from "@/data/experiences";
import { skillBadges } from "@/data/skillBadges";
import Link from "next/link";
import ScrollableTabPanel from "@/app/components/common/workspace/ScrollableTabPanel";
import TabPanelContent from "@/app/components/common/workspace/TabPanelContent";
import { BADEGE_BASE_URL } from "@/constants/constants";
import Badge from "@/app/components/common/Badge";
import { TabPanel } from "@headlessui/react";

type ExperiencesTabProps = {
  contentData: ExperiencesData;
};

export default function ExperiencesTab({ contentData }: ExperiencesTabProps) {
  return (
    <ScrollableTabPanel>
      <TabPanelContent title="Overview">
        <div className="flex flex-col pb-10">
          <h3 className="m-4 text-2xl border-b-1 border-tabs-tab-border">Overview</h3>
          <ul className="list-disc pl-12 space-y-4">
            <li>Position: {contentData.position}</li>
            <li>Period: {contentData.period}</li>
            {contentData.links?.github && (
              <li>
                <Link
                  href={contentData.links.github}
                  target="_blank"
                  className="text-tabs-content-link-text hover:underline"
                >
                  GitHub Repository
                </Link>
              </li>
            )}
            {contentData.links?.demo && (
              <li>
                <Link
                  href={contentData.links.demo}
                  target="_blank"
                  className="text-tabs-content-link-text hover:underline"
                >
                  Website
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-col pb-10">
          <h3 className="m-4 text-2xl border-b-1 border-tabs-tab-border">Technical Stack</h3>
          <ul className="flex list-disc pl-8 flex-wrap gap-5">
            {contentData.details.skillIds.map((skillId, idx) => {
              const badge = skillBadges[skillId];
              if (!badge) return null;

              return badge.link ? (
                <Link key={idx} href={badge.link} className="flex flex-wrap">
                  <Badge
                    src={`${BADEGE_BASE_URL}/${badge.category}-${badge.title}-${badge.color}?logo=${badge.logo}&logoColor=white`}
                    alt={`${badge.category}-${badge.title}`}
                  />
                </Link>
              ) : (
                <Badge
                  key={idx}
                  src={`${BADEGE_BASE_URL}/${badge.category}-${badge.title}-${badge.color}?logo=${badge.logo}&logoColor=white`}
                  alt={`${badge.category}-${badge.title}`}
                />
              );
            })}
          </ul>
        </div>  

        <div className="flex flex-col pb-10">
          <h3 className="m-4 text-2xl border-b-1 border-tabs-tab-border">Responsibilities</h3>
          <ul className="list-disc pl-12 space-y-4">
            {contentData.details.jd.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </TabPanelContent>

      <TabPanelContent title="imgs">
      {contentData.imgs && (
        <TabPanel className="p-2">
          <ul className="flex flex-row list-disc pl-12 space-y-4 whitespace-nowrap gap-8">
            {contentData.imgs.map((img, idx) => (
              <li key={idx}>
                <span>{img.desc}</span>
                <img src={img.url} className="w-xl" />
              </li>
            ))}
          </ul>
        </TabPanel>
      )}
      </TabPanelContent>
    </ScrollableTabPanel>
  );
}
