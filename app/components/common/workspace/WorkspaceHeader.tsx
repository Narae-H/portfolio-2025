import Icon from "@/app/components/common/Icon";
import { ExperiencesData } from "@/data/experiences";
import { SkillData } from "@/data/skills";

export default function WorkspaceHeader ({ contentData }: { contentData: SkillData | ExperiencesData }) {
  return (
    <div className='
      flex flex-col
      h-auto lg:h-4/12
      gap-5
    '>
      <div className='flex items-center gap-6'>
        <Icon name={contentData.titleIconName} size="30px"/>
        <div className='text-3xl d:text-3xl lg:text-5xl'>{contentData.title}</div>
      </div>
      <div className='flex text-lg'>
        {contentData.overviewContent}
      </div>
    </div>
  )
}