import skillDataMap, { SkillData } from '@/data/skills';
import WorkspaceContent from './WorkspaceContent';
import WorkspaceHeader from './WorkspaceHeader';

type WorkSpaceType = {
  menuCategory: string,
  menuId: keyof typeof skillDataMap,
}

export default function Workspace({ 
  menuId,
}: WorkSpaceType) {
  const skillData: SkillData | undefined = skillDataMap[menuId];

  if (!skillData) {
    return <div>Skill data not found.</div>;
  }

  return (
    <div className='flex h-full w-full p-10 md:px-28 md:py-14'>
      <div className="flex flex-col relative h-full w-full ">
        <WorkspaceHeader skillData={skillData}/>
        <WorkspaceContent skillData={skillData}/>
      </div>  
    </div>
  );
}
