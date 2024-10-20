import { fill } from '@cloudinary/url-gen/actions/resize';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { cld } from '../../services/cloudinaryInstance';
import {ContentColorScheme, Member} from '../../types';
import {MemberCard} from './member';

interface AboutUsProps {
  colorSettings: ContentColorScheme;
}

export const AboutUs = ({ colorSettings }: AboutUsProps) => {
  const { t } = useTranslation();
  const [members, setMembers] = useState<Member[]>([]);
  console.log(members);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:3000/members');
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <section id="aboutUs">

      <h1 className={`${colorSettings.h1} ml-2 h-min font-fredericka text-2xl md:text-6xl`}>
        {t('sections.about')}
      </h1>

			<div className={`mx-4 mb-12 pl-2 md:mx-16 ${colorSettings.text}`}>
        <p className="text-md mt-8 md:text-2xl">{t('about.paragraph1')}</p>
        <p className="text-md mt-8 md:text-2xl">{t('about.paragraph2')}</p>
        <p className="text-md mt-8 md:text-2xl">{t('about.paragraph3')}</p>
      </div>

      {/* member cards */}

      <div className="mx-8 grid grid-cols-1 gap-x-4 gap-y-16 pt-8 md:grid-cols-2 lg:grid-cols-3">
        <Fade cascade direction="up" damping={0.1} triggerOnce>
          {members
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((member) => {
              const portrait = cld.image(`bluesjab/${member.image}`);
              
              return (
								<MemberCard name={member.name} cldImg={portrait.resize(fill())} colorSettings={colorSettings} />
              );
            })}
        </Fade>
      </div>
    </section>
  );
};
