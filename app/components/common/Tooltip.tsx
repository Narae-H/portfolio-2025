import React, { ReactNode, useState } from 'react';

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
  className?: string;
  arrowClassName?: string;
};

const ARROW_SIZE = 8;

export default function Tooltip({
  children,
  content,
  side = 'top',
  sideOffset = 8,
  className = '',
  arrowClassName = '',
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const getTooltipPosition = () => {
    switch (side) {
      case 'top':
        return 'bottom-full left-1/2 -translate-x-1/2';
      case 'bottom':
        return 'top-full left-1/2 -translate-x-1/2';
      case 'left':
        return 'right-full top-1/2 -translate-y-1/2';
      case 'right':
        return 'left-full top-1/2 -translate-y-1/2';
      default:
        return '';
    }
  };

  const getArrowPosition = () => {
    switch (side) {
      case 'top':
        return 'top-full left-1/2 -translate-x-1/2 rotate-45';
      case 'bottom':
        return 'bottom-full left-1/2 -translate-x-1/2 rotate-45';
      case 'left':
        return 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45';
      case 'right':
        return 'right-full top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45';
      default:
        return '';
    }
  };

  const getTooltipStyle = () => {
    switch (side) {
      case 'top':
        return { marginBottom: sideOffset };
      case 'bottom':
        return { marginTop: sideOffset };
      case 'left':
        return { marginRight: sideOffset };
      case 'right':
        return { marginLeft: sideOffset };
      default:
        return {};
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      tabIndex={0}
    >
      {children}

      {visible && (
        <div
          className={`
            absolute z-10 select-none rounded px-2 py-2 text-sm text-nowrap shadow-lg
            ${getTooltipPosition()} ${className}
          `}
          style={getTooltipStyle()}
          role="tooltip"
        >
          {content}
          <div
            style={{ width: ARROW_SIZE, height: ARROW_SIZE }}
            className={`absolute ${arrowClassName} ${getArrowPosition()}`}
          />
        </div>
      )}
    </div>
  );
}
