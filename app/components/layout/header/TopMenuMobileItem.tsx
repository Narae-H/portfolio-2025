'use client';

import { Item as MenuType } from '@/data/menu/mainMenu';
import { Content, DropdownMenu, Item, Portal, Separator, Sub, SubContent, SubTrigger, Trigger } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';

type TopMenuMobileItemType = {
  item: MenuType,
  className?: string
}

export default function TopMenuSubItem({ 
  item,
  className = '' 
}: TopMenuMobileItemType) {
  // const [bookmarksChecked, setBookmarksChecked] = useState(true);
	// const [urlsChecked, setUrlsChecked] = useState(false);
  
  console.log(item);
  // const path = `${parentPath}/${item.name.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <DropdownMenu>
      <Trigger asChild>
        <div className={`
          flex
          text-header-text whitespace-nowrap
          p-3 
          rounded-md 
          hover:bg-header-hover-bg 
          hover: cursor-pointer 
          ${className}
        `}>
          {item.name}
        </div>
      </Trigger>

      <Portal>
        <Content
          side="bottom"    
          align="start"
          alignOffset={5}
          className="
            bg-dropdown-menu-bg 
            text-dropdown-menu-text 
            rounded-md 
            shadow-md 
            min-w-[180px] 
            p-1
            border-[1px]
            border-dropdown-menu-border
            whitespace-nowrap
            select-none
            z-[9999]
          "
        >

          <Item
            className="
              flex justify-between items-center
              px-3 py-2
              whitespace-nowrap
              rounded
              cursor-pointer
              hover:bg-dropdown-menu-hover-bg
              focus:outline-none
              focus:ring-0
            "
          >
            New Tab
            <div className="text-xs text-gray-400 ml-2 select-none">⌘+T</div>
          </Item>

          <Sub>
            <SubTrigger 
              className="
              flex justify-between items-center
                px-3 py-2
                whitespace-nowrap
                rounded
                cursor-pointer
                hover:bg-dropdown-menu-hover-bg
                  focus:outline-none
                  focus:ring-0
              ">
              More Tools
              <div className="RightSlot">
                <MdArrowForwardIos />
              </div>
            </SubTrigger>
            <Portal>
              <SubContent
                sideOffset={4}
                className="
                bg-dropdown-menu-bg 
                text-dropdown-menu-text 
                rounded-md 
                shadow-md 
                min-w-[180px] 
                p-1
                border-[1px]
                border-dropdown-menu-border
                whitespace-nowrap
                select-none
                z-[9999]
                "
              >
                <Item 
                  className="
                    flex justify-between items-center
                    px-3 py-2
                    whitespace-nowrap
                    rounded
                    cursor-pointer
                    hover:bg-dropdown-menu-hover-bg
                    focus:outline-none
                    focus:ring-0
                  ">
                  Save Page As… <div className="RightSlot">⌘+S</div>
                </Item>
                <Item className="DropdownMenuItem">
                  Create Shortcut…
                </Item>
                <Item className="DropdownMenuItem">
                  Name Window…
                </Item>
                <Separator className="DropdownMenu.Separator" />
                <Item className="DropdownMenuItem">
                  Developer Tools
                </Item>
              </SubContent>
            </Portal>
          </Sub>
        </Content>
      </Portal>
    </DropdownMenu>
    // <Link href={path} passHref>
    //   <Menu.Item className="text-blue-600 font-semibold">
    //     {item.name}
    //   </Menu.Item>
    // </Link>
  );
}
