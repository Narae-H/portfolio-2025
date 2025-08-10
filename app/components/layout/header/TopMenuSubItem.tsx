'use client';

import { Menu } from '@mantine/core';
import { Item } from '@/data/menu/mainMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';

interface Props {
  item: Item;
  parentPath?: string;
}

export default function TopMenuSubItem({ item, parentPath = '' }: Props) {
  const pathname = usePathname();
  const path = `${parentPath}/${item.name.toLowerCase().replace(/\s+/g, '-')}`;

  const isActive = pathname.startsWith(path);

  if (item.items && item.items.length > 0) {
    return (
      <Menu.Sub>
        <Menu.Sub.Target>
          <Menu.Sub.Item className={cn(isActive && 'text-blue-600 font-semibold')}>
            {item.name}
          </Menu.Sub.Item>
        </Menu.Sub.Target>
        <Menu.Sub.Dropdown>
          {item.items.map((subItem) => (
            <TopMenuSubItem key={subItem.name} item={subItem} parentPath={path} />
          ))}
        </Menu.Sub.Dropdown>
      </Menu.Sub>
    );
  }

  return (
    <Link href={path} passHref>
      <Menu.Item className={cn(isActive && 'text-blue-600 font-semibold')}>
        {item.name}
      </Menu.Item>
    </Link>
  );
}
