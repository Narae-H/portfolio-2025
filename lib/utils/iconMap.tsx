import { IconBaseProps } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { BiLeaf } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaAws, FaCss3Alt, FaHashtag, FaJ, FaJava, FaMaxcdn, FaReact, FaS } from "react-icons/fa6";
import { GiMuscleUp } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { ImOnedrive } from "react-icons/im";
import { IoLogoJavascript, IoMdGitBranch } from "react-icons/io";
import { LuConstruction } from "react-icons/lu";
import { MdCode } from "react-icons/md";
import { RiBootstrapLine } from "react-icons/ri";
import { SiJavascript, SiMariadb, SiSpringboot } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { TiVendorMicrosoft } from "react-icons/ti";
import { VscAzure, VscCode, VscFiles, VscFolderLibrary } from "react-icons/vsc";


export type IconMapType = {
  [key: string]: React.ComponentType<IconBaseProps>;
};

export const IconMap: IconMapType = {
  VscFiles,
  VscCode,
  VscFolderLibrary,
  AiOutlineMail,
  BsPerson,
  GiMuscleUp,
  LuConstruction,
  FaJ,
  SiSpringboot,
  MdCode,
  FaHashtag,
  IoLogoJavascript,
  FaReact,
  RiBootstrapLine,
  BiLeaf,
  TbBrandMysql,
  SiMariadb,
  ImOnedrive,
  FaAws,
  VscAzure,
  IoMdGitBranch,
  FaS,
  TiVendorMicrosoft,
  FaMaxcdn,
  FaJava,
  FaCss3Alt,
  GrMysql,
  SiJavascript
};
