
export interface MenuItem {
  id: string;
  title: string;
  tooltip?: string;
  iconKey?: string;
  link?: string; 
  description?: string;
  items?: MenuItem[];
  style?: {};
}

export interface Menu {
  comment?: string;
  menus: MenuItem[];
}

export const EmptyMenuItemValue: MenuItem = {
  id: '',
  title: ''
}