import React, { ReactNode } from 'react';
import { colorScheme } from '../../const';
import { BGColor } from '../../types';

type ContentBlockProps = {
  bgColor: BGColor;
  children: ReactNode;
  reducedPadding?: 'top' | 'bottom';
}
const getPadding = (reducedPadding?: 'top' | 'bottom'): string => {
  switch (reducedPadding) {
    case 'top':
      return 'pb-4 md:pb-20';
    case 'bottom':
      return 'pt-4 md:pt-20';
    default:
      return 'py-6 md:py-20';
  }
};


export const ContentBlock: React.FC<ContentBlockProps> = ({ bgColor, children, reducedPadding }) => {
  return (
    <div className="flex w-full flex-row">
      <div className={`flex-1 ${colorScheme[bgColor].margins}`} />
      <div className={`${colorScheme[bgColor].body} w-[71rem] max-w-full px-4 ${getPadding(reducedPadding) }`}>{children}</div>
      <div className={`flex-1 ${colorScheme[bgColor].margins}`} />
    </div>
  );
};
