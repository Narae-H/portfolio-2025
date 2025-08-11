import WorkspaceHeader from './WorkspaceHeader';
import ScrollToTopButton from './ScrollToTopButton';
import skillDataMap, { SkillData } from '@/data/skills';
import WorkspaceContent from './WorkspaceContent';

type WorkSpaceType = {
  menuCategory: string,
  menuId: keyof typeof skillDataMap
}

export default function Workspace({ menuCategory, menuId }: WorkSpaceType) {
  const skillData: SkillData | undefined = skillDataMap[menuId];

  if (!skillData) {
    return <div>Skill data not found.</div>;
  }

  return (
    <div className='flex h-full w-full overflow-y-scroll px-28 py-14'>
      <ScrollToTopButton />
      <div className="flex flex-col relative h-full w-full ">
        <WorkspaceHeader skillData={skillData}/>
        <WorkspaceContent skillData={skillData}/>
      </div>  
    </div>
  );
}
