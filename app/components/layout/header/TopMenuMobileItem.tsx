'use client';

import { Item as MenuType } from '@/data/menu/mainMenu';
import { buildSlugPath } from '@/lib/utils/url';
import { Content, DropdownMenu, Item, Portal, Sub, SubContent, SubTrigger, Trigger } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';

type TopMenuMobileItemType = {
  item: MenuType
}

export default function TopMenuSubItem({ 
  item,
}: TopMenuMobileItemType) {

  // If home menu
  if (item.name === 'Home') {
    return (
      <div
        className="
          flex text-header-text p-3 rounded-md 
          hover:bg-header-hover-bg hover:cursor-pointer
        "
      >
        <Link href="/">{item.name}</Link>
      </div>
    );
  }

  // If sub-menus
  return (
    <DropdownMenu>
      <Trigger
        className="
          flex text-header-text whitespace-nowrap p-3 rounded-md 
          hover:bg-header-hover-bg hover:cursor-pointer focus:outline-none
        "
      >
        {item.name}
      </Trigger>

      <Portal>
        <Content side="bottom" align="start" alignOffset={5} className="dropdown-menu-content">
          {renderSubMenuItems(item.items)}
        </Content>
      </Portal>
    </DropdownMenu>
  );
}

function renderSubMenuItems(subItems?: MenuType[]) {
  if (!subItems) return null;

  return subItems.map((subItem) => (
    <Sub key={subItem.name}>
      <SubTrigger className="dropdown-menu-trigger">
        {subItem.name}
        <div>
          <MdArrowForwardIos />
        </div>
      </SubTrigger>
      <Portal>
        <SubContent sideOffset={2} className="dropdown-menu-content">
          {subItem.items?.map((subSubItem) => (
            <Item key={subSubItem.name} className="dropdown-menu-item">
              <span>
                <Link href={`/${buildSlugPath([subItem.name, subSubItem.name])}`}>
                  {subSubItem.name}
                </Link>
              </span>
            </Item>
          ))}
        </SubContent>
      </Portal>
    </Sub>
  ));
}