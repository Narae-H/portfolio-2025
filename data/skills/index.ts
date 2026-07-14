import ainativeengineering from './ai-native-engineering.json';

import java from './java.json';
import springboot from './spring-boot.json';

import html from './html.json';
import css from './css.json';
import tailwindcss from './tailwindcss.json';
import javascript from './javascript.json';
import typescript from './typescript.json';
import react from './react.json';
import nextjs from './nextjs.json';
import bootstrap from './bootstrap.json';
import thymeleaf from './thymeleaf.json';

import junit from './junit.json';
import playwright from './playwright.json';

import mysql from './mysql.json';
import mariadb from './maria-db.json';
import mssql from './mssql.json';
import oracle from './oracle.json';

import aws from './aws.json';
import docker from './docker.json';
import githubactions from './github-actions.json';

import codeversioncontrol from './code-version-control.json';
import seo from './seo.json';

const skillDataMap = {
  ainativeengineering,
  java, springboot,
  html, css, tailwindcss, javascript, typescript,
  react, nextjs, bootstrap, thymeleaf,
  junit, playwright,
  mysql, mariadb, mssql, oracle,
  aws, docker, githubactions,
  codeversioncontrol, seo
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
};

export type SkillId = keyof typeof skillDataMap;
