import java from './java.json';
import springboot from './spring-boot.json';
import html from './html.json';
import css from './css.json';
import tailwindcss from './tailwindcss.json';
import javascript from './javascript.json';
import typescript from './typescript.json';
import react from './react.json';
import bootstrap from './bootstrap.json';
import thymeleaf from './thymeleaf.json';

import mysql from './mysql.json';
import mariadb from './maria-db.json';
import azuredatabase from './azure-db.json';

import aws from './aws.json';
import microsoft from './microsoft.json';

import codeversioncontrol from './code-version-control.json';
import cicdpipeline from './cicdpipeline.json';
import seo from './seo.json';
import msofficeapp from './ms-office-app.json';
import mspowerplatform from './ms-power-platform.json';

const skillDataMap = {
  java, springboot,
  html, css, tailwindcss, javascript, typescript, 
  react, bootstrap, thymeleaf,
  mysql, mariadb, azuredatabase,
  aws, microsoft,
  codeversioncontrol, cicdpipeline, seo, msofficeapp, mspowerplatform
};

export default skillDataMap;

export type RelatedProject = {
  projectName: string;
  projectLink: string;
};

export type SkillData = {
  title: string;
  titleIconName: string;
  subTitle: string;
  overviewContent: string;
  relatedProjects: RelatedProject[];
  imgs?: [{desc: string, url: string}]
};

export type SkillId = keyof typeof skillDataMap;
