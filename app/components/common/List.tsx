import { MenuItem } from "@/models/menu";
import Link from "next/link";
import Icon from "@/app/components/common/Icon";

export interface ListProps {
  title: string;
  listItems: MenuItem[] | undefined;
  className?: string;
}

export default function List({ 
  title, 
  listItems, 
  className = "" 
}: ListProps) {
  return (
    <div className={`flex flex-col h-fit mb-5 ${className}`}>
      <div className="flex text-2xl text-list-text mb-1">{title}</div>
      <ul className="flex flex-col pl-5 gap-1 w-full">
        {listItems?.map((item) => (
          <li 
            key={item.id}
            className="flex flex-row items-center text-basic gap-3"
          >
            <div className="flex flex-row p-1.5 gap-0.5">
              {item.link ? (
                <Link href={item.link} className="flex items-center gap-2">
                  {item.iconKey && <Icon name={item.iconKey} {...item.style} />}
                  <span className="flex text-list-link-text">{item.title}</span>
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  {item.iconKey && <Icon name={item.iconKey} size="13px" {...item.style}/>}
                <span>{item.title}</span>
                </div>
              )}
            </div>

            <div className="flex flex-1 min-w-0 text-tabs-content-text-secondary">
              <span className="block w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {item.description}
              </span>
            </div>  
          
          </li>
        ))}
      </ul>
    </div>
  );
}
