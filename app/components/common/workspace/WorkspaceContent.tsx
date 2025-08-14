import { SkillData } from "@/data/skills";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function WorkspaceContent({ skillData }: { skillData: SkillData }) {
  return (
    <div className="flex flex-1 relative">
      <TabGroup className="w-full h-full py-5">
        <TabList className="flex space-x-4 border-b border-tabs-tab-border">
          <Tab
            className={({ selected }) =>
              classNames(
                "px-4 py-2 text-lg font-medium rounded-t-lg focus:outline-none cursor-pointer",
                selected
                  ? "border-b-1 border-tabs-tab-active-border"
                  : "border-b-1 border-transparent"
              )
            }
          >
            DETAILS
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "px-4 py-2 text-lg font-medium rounded-t-lg focus:outline-none cursor-pointer",
                selected
                  ? "border-b-1 border-tabs-tab-active-border"
                  : "border-b-1 border-transparent"
              )
            }
          >
            IMAGES
          </Tab>
        </TabList>

        <TabPanels className="h-full w-full">
          <TabPanel className="p-2">
            <h3 className="m-4 font-semibold text-2xl">Related Projects:</h3>
            <ul className="list-disc pl-6 space-y-4">
              {skillData.relatedProject.map((project, idx) => (
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
        </TabPanels>
      </TabGroup>
    </div>
  );
}
