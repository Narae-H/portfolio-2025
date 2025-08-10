import React from "react";

type WindowButtonProps = {
  Icon: any;
  children?: React.ReactNode;
  tooltip?: string;
  className?: string;
  isClose?: boolean;
};

export default function WindowButton({
  Icon,
  children,
  tooltip,
  className='',
  isClose = false
}: WindowButtonProps) {

  return (
    isClose?
    (
      <span className="flex items-center h-full p-4 hover:bg-red-500 hover:cursor-pointer" title={tooltip}>
        <Icon className={`w-5 h-5 ${className}`}>{children}</Icon>
      </span>
    ):(
      <span className="flex items-center h-full p-4 hover:bg-base-hover-bg hover:cursor-pointer" title={tooltip}>
        <Icon className={`w-5 h-5 ${className}`}>{children}</Icon>
      </span>
    )
  )
}