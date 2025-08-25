import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen/index';
import { t } from 'i18next';
import React from 'react';
import { ContentColorScheme } from '../../types';

interface MemberCardProps {
  name: string;
  cldImg: CloudinaryImage;
  colorSettings: ContentColorScheme;
}

export const MemberCard: React.FC<MemberCardProps> = ({ name, cldImg, colorSettings }) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div
        className={`flex w-36 flex-col justify-center rounded md:w-64 ${colorSettings.cardBg} p-1 text-center drop-shadow-2xl md:p-2`}
      >
        <div className="aspect-square h-36 overflow-hidden md:h-64">
          <AdvancedImage cldImg={cldImg} className="h-full w-full object-cover" />
        </div>
        <h2 className={`mx-2 h-min pt-2 font-fredericka text-sm md:text-xl ${colorSettings.cardH1}`}>{name}</h2>
        <p className={`mb-2 text-xs md:mb-0 md:text-sm ${colorSettings.cardText}`}>{t(`instruments.${name}`)}</p>
      </div>
    </div>
  );
};
