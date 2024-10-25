import React, { ReactNode } from 'react';
import { colorScheme } from '../../const';
import { BGColor } from '../../types';

type ContentBlockProps = {
  bgColor: BGColor;
  children: ReactNode;
  isFooter?: boolean;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ bgColor, children, isFooter = false }) => {
  return (
    <div className="flex w-full flex-row">
      <div className={`flex-1 ${colorScheme[bgColor].margins}`} />
      <div className={`${colorScheme[bgColor].body} w-[71rem] max-w-full px-4 ${isFooter ? "pt-10 md:pt-20" : "py-10 md:py-20" }`}>{children}</div>
      <div className={`flex-1 ${colorScheme[bgColor].margins}`} />
    </div>
  );
};
