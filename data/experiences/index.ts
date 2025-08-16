import buildcicdpipeline from './build-ci-cd-pipeline.json';
import mymusclechefclone from './my-muscle-chef-clone.json';
import portfolio from './portfolio.json';
import financeoverviewdashboard from './finance-overview-dashboard.json';
import employeecapacityreport from './employee-capacity-report.json';
import hhlawyersintranet from './h-h-lawyers-intranet.json';
import humanresourcedatabase from './human-resource-database.json';
import oneclicktrademarkwebsite from './one-click-trade-mark-website.json';

import individualperformancedashboard from './individual-performance-dashboard.json';
import hhlawyerswebmigration from './h-h-lawyers-website-and-server-migration.json';
import stmsmanagement from './stms-management.json';

import productlifecyclmanagement from './product-lifecycle-management.json';
import trafficinformationsystem from './traffic-information-system.json';

import mpis from './mpis.json';
import mpasys from './mobispatent-system.json';
import poc from './poc.json';
import systemmanagement from './system-management.json';

const experiencesDataMap = {
  portfolio, mymusclechefclone, buildcicdpipeline, humanresourcedatabase,
  employeecapacityreport, hhlawyersintranet,
  oneclicktrademarkwebsite, financeoverviewdashboard, individualperformancedashboard,
  hhlawyerswebmigration, stmsmanagement, productlifecyclmanagement,
  trafficinformationsystem, mpis, mpasys, poc, systemmanagement
};

export default experiencesDataMap;

export type Details = {
  skillIds: string[];
  jd: string[];
};

export type ExperiencesData = {
  title: string;
  titleIconName: string;
  subTitle: string;
  overviewContent: string;
  position: string;
  period: string;
  links?: {github?: string, demo?: string};
  details: Details;
  imgs?: {desc: string, url: string}[];
};

export type ExperiencesId = keyof typeof experiencesDataMap;
