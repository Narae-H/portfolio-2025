import { IconBaseProps } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { BiLeaf } from "react-icons/bi";
import { BsPerson, BsServer } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";
import { FaAws, FaCar, FaContao, FaCss3Alt, FaGithub, FaHashtag, FaJ, FaJava, FaMaxcdn, FaMicrosoft, FaMoneyBills, FaPersonRays, FaReact, FaS } from "react-icons/fa6";
import { GiClick, GiCycle, GiMuscleUp } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { GrMysql } from "react-icons/gr";
import { ImOnedrive } from "react-icons/im";
import { IoLogoJavascript, IoMdGitBranch } from "react-icons/io";
import { LuConstruction } from "react-icons/lu";
import { MdCode, MdOutlineContentPasteSearch, MdOutlineManageHistory, MdOutlineReduceCapacity } from "react-icons/md";
import { PiTrafficSignalFill } from "react-icons/pi";
import { RiBootstrapLine } from "react-icons/ri";
import { SiJavascript, SiMariadb, SiSpringboot, SiThymeleaf } from "react-icons/si";
import { SlPeople } from "react-icons/sl";
import { TbBrandMysql, TbBrandSamsungpass } from "react-icons/tb";
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
  SiJavascript,
  SiThymeleaf,
  FaMicrosoft,
  FaGithub,
  MdOutlineContentPasteSearch,
  FaPersonRays,
  BsServer,
  MdOutlineReduceCapacity,
  CgBrowser,
  GiClick,
  FaMoneyBills,
  SlPeople,
  GoLaw,
  TbBrandSamsungpass,
  GiCycle,
  PiTrafficSignalFill,
  FaCar,
  FaContao,
  MdOutlineManageHistory
};
