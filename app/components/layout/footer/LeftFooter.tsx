import Link from "next/link";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { VscRemote } from "react-icons/vsc";

export default function LeftFooter() {
  return(
    <div className="flex h-full text-sm gap-2">
      <div className="flex h-full pl-4 pr-4 items-center gap-2 bg-footer-point-bg text-footer-point-text">
        <VscRemote className="w-5 h-5" /><span className="flex">Narae&apos;s Portfolio</span>
      </div>
      <Link className="flex h-full items-center overflow-hidden" href="https://github.com/Narae-H?tab=repositories" target='_blank'> 
        <ImGithub /> 
        <span>GitHub</span> 
      </Link>
      <Link className="flex h-full items-center overflow-hidden" href="https://www.linkedin.com/in/narae-hyeon" target='_blank'> 
        <ImLinkedin /> 
        <span>LinkedIn</span>
      </Link>
    </div>
  )
}