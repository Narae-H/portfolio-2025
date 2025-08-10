import Link from "next/link";
import { ReactNode } from "react";

export interface CardItem {
  id: string;
  title: string;
  Icon?: ReactNode;
  link: string;
  description?: string;
}

export interface CardProps {
  title: string;
  cardItems: CardItem[];
  className?: string;
}

export default function Card({
  title, 
  cardItems, 
  className = "" 
}: CardProps) {

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex text-2xl text-card-header-text mb-1">{title}</div>
      {
        cardItems.map( (card) => 
        <Link 
          key={card.id} 
          href={card.link} 
          className="flex bg-card-bg rounded-lg px-5 py-3 ml-5 my-3 hover:bg-card-hover-bg">
          <div className="flex items-center w-full">
            <div className="flex w-1/12 pl-2 items-center">
              {card.Icon}
            </div>

            <div className="flex flex-col gap-1 h-full w-[90%]">
              <div className="text-md text-card-text font-[mono-space-neon-bold]">{card.title}</div>
              <div className="flex flex-1 min-w-0 text-tabs-content-text-secondary">
                <span className="w-full overflow-hidden text-ellipsis [-webkit-line-clamp:2] [display:-webkit-box] [-webkit-box-orient:vertical]">
                  {card.description}
                </span>
              </div>  
            </div>
          </div>
        </Link>
        )
      }
    </div>
  )
}