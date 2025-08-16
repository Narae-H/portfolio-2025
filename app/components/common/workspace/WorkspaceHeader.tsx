import Icon from "@/app/components/common/Icon";
import { ExperiencesData } from "@/data/experiences";
import { SkillData } from "@/data/skills";

export default function WorkspaceHeader ({ contentData }: { contentData: SkillData | ExperiencesData }) {
  return (
    <div className='
      flex flex-col
      bg-tabs-content-bg
      z-10
      gap-8
    '>
      <div className='flex flex-col gap-1'>
        <div className="flex flex-row gap-3">
          <Icon name={contentData.titleIconName} size="30px"/>
          <div className='text-3xl lg:text-5xl'>{contentData.title}</div>
        </div>
        <div className="flex text-lg text-tabs-content-text-secondary italic">
          {contentData.subTitle && `${contentData.subTitle}`}
        </div>  
      </div>
      <div className='flex text-lg'>
        {contentData.overviewContent}
      </div>
    </div>
  )
}