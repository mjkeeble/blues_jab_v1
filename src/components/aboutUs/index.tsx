import { fill } from '@cloudinary/url-gen/actions/resize';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import data from '../../../data/data.json';
import { cld } from '../../services/cloudinaryInstance';
import { ContentColorScheme, Member } from '../../types';
import { SectionHeading } from '../index';
import { MemberCard } from './member';

type AboutUsProps = {
  colorSettings: ContentColorScheme;
};

export const AboutUs = ({ colorSettings }: AboutUsProps) => {
  const { t } = useTranslation();
  // const [members, setMembers] = useState<Member[]>([]);
  const [members] = useState<Member[]>(data.members);
  // const apiUrl = import.meta.env.VITE_API_URL;

  // useEffect(() => {
  //   const fetchMembers = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}\\members`);
  //       const data = await response.json();
  //       setMembers(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchMembers();
  // }, [apiUrl]);
  //
  return (
    <section id="aboutUs">
      <SectionHeading textColor={colorSettings.h1} text={t('sections.about')} />

      <div className={`mx-4 mb-12 pl-2 text-sm md:mx-16 md:text-base ${colorSettings.text}`}>
        <p className="mt-8">{t('about.paragraph1')}</p>
        <p className="mt-8">{t('about.paragraph2')}</p>
        <p className="mt-8">{t('about.paragraph3')}</p>
      </div>

      {/* member cards */}

      <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:mx-8 md:gap-y-16 md:pt-8 lg:grid-cols-3">
        <Fade cascade direction="up" damping={0.1} triggerOnce>
          {members
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((member) => {
              const portrait = cld.image(`bluesjab/${member.image}`);

              return (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  cldImg={portrait.resize(fill())}
                  colorSettings={colorSettings}
                />
              );
            })}
        </Fade>
      </div>
    </section>
  );
};
