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
  console.log('🚀 -----------------------------------🚀');
  console.log('🚀 => colorSettings:', colorSettings);
  console.log('🚀 -----------------------------------🚀');
  return (
    <div className="flex w-full flex-col items-center opacity-80">
      <div className={`flex w-64 flex-col justify-center ${colorSettings.cardBg} text-center  p-2 drop-shadow-2xl`}>
        <div className="aspect-square h-64  object-cover">
          <AdvancedImage cldImg={cldImg} className="h-full w-full object-cover" />
        </div>
        <h2 className={`mx-2 pt-2 h-min font-fredericka text-4xl ${colorSettings.cardH1}`}>{name}</h2>
        <p className={`mx-2 text-2xl ${colorSettings.cardText}`}>{t(`instruments.${name}`)}</p>
      </div>
    </div>
  );
};
