import { SkillData } from "@/data/skills";
import { TabPanel } from "@headlessui/react";
import Link from "next/link";
import ScrollableTabPanel from "@/app/components/common/workspace/ScrollableTabPanel";

type SkillsTabProps = {
  contentData: SkillData;
};

export default function SkillsTab({ contentData }: SkillsTabProps) {
  return (
    <ScrollableTabPanel>
      <TabPanel className="px-2 py-5">
        <ul className="list-disc pl-6 space-y-4">
          {contentData.relatedProjects.map((project, idx) => (
            <li key={idx}>
              <Link
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tabs-content-link-text hover:underline"
              >
                {project.projectName}
              </Link>
            </li>
          ))}
        </ul>
      </TabPanel>

      <TabPanel className="p-2">
        <h3 className="m-4 font-semibold text-2xl">Images</h3>
        <p className="pl-4 space-y-4">No images available yet.</p>
      </TabPanel>
    </ScrollableTabPanel>
  );
}
