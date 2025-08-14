import { MenuItem } from '@/models/menu';
import { Content, DropdownMenu, Item, Portal, Sub, SubContent, SubTrigger, Trigger } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';

type TopMenuMobileItemType = {
  item: MenuItem
}

export default function TopMenuSubItem({ 
  item,
}: TopMenuMobileItemType) {
  console.log(item);

  // If home menu
  if (item.title === 'Home') {
    return (
      <div
        className="
          flex text-header-text p-3 rounded-md 
          hover:bg-header-hover-bg hover:cursor-pointer
        "
      >
        <Link href="/">{item.title}</Link>
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
        {item.title}
      </Trigger>

      <Portal>
        <Content side="bottom" align="start" alignOffset={5} className="dropdown-menu-content">
          {renderSubMenuItems(item)}
        </Content>
      </Portal>
    </DropdownMenu>
  );
}

function renderSubMenuItems(item: MenuItem) {
  const subItems = item.items;
  if (!subItems) return null;

  return subItems.map((subItem) => (
    <Sub key={subItem.id}>
      <SubTrigger className="dropdown-menu-trigger">
        {subItem.title}
        <div>
          <MdArrowForwardIos />
        </div>
      </SubTrigger>
      <Portal>
        <SubContent sideOffset={2} className="dropdown-menu-content">
          {subItem.items?.map((subSubItem) => (
          <Item key={subSubItem.id} asChild>
            <Link href={subSubItem.link ?? '#'} className="dropdown-menu-item">
              {subSubItem.title}
            </Link>
          </Item>
          ))}
        </SubContent>
      </Portal>
    </Sub>
  ));
}