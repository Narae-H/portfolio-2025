// H & H Lawyers · Sydney · 2019 – Present
import platformrebuild from './hh-platform-rebuild.json';
import oneclicktrademark from './hh-one-click-trade-mark.json';
import websitemigration from './hh-website-server-migration.json';
import internalsystems from './hh-internal-systems.json';

// PNDPS · Korea · 2014 – 2018
import hyundaimobis from './pndps-hyundai-mobis.json';
import pyeongchang2018 from './pndps-pyeongchang-2018.json';
import samsungstms from './pndps-samsung-stms.json';
import dassaultplmpoc from './pndps-dassault-plm-poc.json';

// Personal
import groundeddoc from './personal-groundeddoc.json';
import portfolio from './personal-portfolio.json';

const experiencesDataMap = {
  platformrebuild, oneclicktrademark, websitemigration, internalsystems,
  hyundaimobis, pyeongchang2018, samsungstms, dassaultplmpoc,
  groundeddoc, portfolio
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
};

export type ExperiencesId = keyof typeof experiencesDataMap;
