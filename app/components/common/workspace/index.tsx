import skillDataMap, { SkillData } from '@/data/skills';
import WorkspaceContent from './WorkspaceContent';
import WorkspaceHeader from './WorkspaceHeader';
import experiencesDataMap, { ExperiencesData } from '@/data/experiences';

type WorkSpaceType = {
  menuCategory: string,
  tabId: keyof typeof skillDataMap | keyof typeof experiencesDataMap,
}

export default function Workspace({ 
  menuCategory,
  tabId,
}: WorkSpaceType) {
  let contentData: SkillData | ExperiencesData | undefined;

  if (menuCategory === "skills" && tabId in skillDataMap) {
    contentData = skillDataMap[tabId as keyof typeof skillDataMap];
  } else if (menuCategory === "experiences" && tabId in experiencesDataMap) {
    contentData = experiencesDataMap[tabId as keyof typeof experiencesDataMap];
  } else {
    contentData = undefined;
  }

  if (!contentData) {
    return <div>data not found.</div>;
  }

  return (
    <div className='flex h-full lg:h-auto w-full m-10 lg:m-24'>
      <div className="
        flex flex-col 
        relative 
        h-full lg:h-auto w-full 
        lg:justify-between
        ">
        <WorkspaceHeader contentData={contentData}/>
        <WorkspaceContent menuCategory={menuCategory} contentData={contentData}/>
      </div>  
    </div>
    // <div className='flex h-full w-full m-10 md:px-28 md:py-14'>
    //   <div className="flex flex-col relative h-[fit-content] w-full ">
    //     <WorkspaceHeader contentData={contentData}/>
    //     <WorkspaceContent menuCategory={menuCategory} contentData={contentData}/>
    //   </div>  
    // </div>
  );
}
