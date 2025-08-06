import Link from "next/link";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { VscRemote } from "react-icons/vsc";

export default function LeftFooter() {
  return(
    <div className="flex h-full text-sm">
      <div className="flex h-full items-center pl-3 pr-4 gap-1 bg-footer-point-bg text-footer-point-text">
        <VscRemote className="w-5 h-5" />
        <span className="flex">Narae&apos;s Portfolio</span>
      </div>
      <Link className="flex h-full items-center overflow-hidden pl-3 pr-3 gap-1 hover:bg-footer-hover-bg hover:text-footer-hover-text" href="https://github.com/Narae-H?tab=repositories" target='_blank'> 
        <ImGithub /> 
        <span className="flex">GitHub</span> 
      </Link>
      <Link className="flex h-full items-center overflow-hidden pl-3 pr-3 gap-1 hover:bg-footer-hover-bg hover:text-footer-hover-text" href="https://www.linkedin.com/in/narae-hyeon" target='_blank'> 
        <ImLinkedin /> 
        <span className="flex">LinkedIn</span>
      </Link>
    </div>
  )
}