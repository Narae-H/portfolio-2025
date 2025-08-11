import { SkillData } from "@/data/skills";
import Icon from "../Icon";

export default function WorkspaceHeader ({ skillData }: { skillData: SkillData }) {
  return (
    <div className='
      flex flex-col
      h-4/12
      gap-5
    '>
      <div className='flex items-center gap-6'>
        <Icon name={skillData.titleIconName} size="30px"/>
        <div className='text-5xl'>{skillData.title}</div>
      </div>
      <div className='flex text-lg'>
        {skillData.overviewContent}
      </div>
    </div>
  )
}