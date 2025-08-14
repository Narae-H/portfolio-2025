import buildcicdpipeline from './build-ci-cd-pipeline.json';
import portfolio from './portfolio.json';
import humanresourcedatabase from './finance-overview-dashboard.json';
import servermigration from './server-migration.json';
import employeecapacityreport from './employee-capacity-report.json';
import hhlawyersintranet from './h-h-lawyers-intranet.json';
import oneclicktrademarkwebsite from './one-click-trade-mark-website.json';
import financeoverviewdashboard from './finance-overview-dashboard.json';

import individualperformancedashboard from './individual-performance-dashboard.json';
import hhlawyerswebmigration from './h-h-lawyers-website-and-server-migration.json';
import stmsmanagement from './stms-management.json';

import productlifecyclmanagement from './product-lifecycle-management.json';
import trafficinformationsystem from './traffic-information-system.json';

import mpis from './mpis.json';
import poc from './poc.json';
import systemmanagement from './system-management.json';

const experiencesDataMap = {
  buildcicdpipeline, portfolio, humanresourcedatabase,
  servermigration, employeecapacityreport, hhlawyersintranet,
  oneclicktrademarkwebsite, financeoverviewdashboard, individualperformancedashboard, 
  hhlawyerswebmigration, stmsmanagement, productlifecyclmanagement, 
  trafficinformationsystem, mpis, poc, systemmanagement
};

export default experiencesDataMap;

export type Details = {
  skills: string[];
  jd: string[];
};

export type ExperiencesData = {
  title: string;
  titleIconName: string;
  subTitle: string;
  overviewContent: string;
  position: string;
  details: Details;
};

export type ExperiencesId = keyof typeof experiencesDataMap;
