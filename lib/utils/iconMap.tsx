import { IconType } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { VscCode, VscFiles, VscFolderLibrary } from "react-icons/vsc";

type IconMapType = {
  [key: string]: IconType
}
export const IconMap: IconMapType = {
  VscFiles: VscFiles,
  VscCode: VscCode,
  VscFolderLibrary: VscFolderLibrary,
  AiOutlineMail: AiOutlineMail
}