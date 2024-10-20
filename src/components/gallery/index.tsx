import { Fade, Slide } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import Carousel from '../carousel';

import data from '../../../data/data.json';

export const Gallery = () => {
  const { t } = useTranslation();
  return (
    <section id="gallery" className="content-section">
      <Slide direction="left" triggerOnce>
        <h1 className="text-bj-blue dark:text-bj-blue-light text-center text-2xl md:text-6xl font-fredericka m-2 pb-6">
          {t('sections.gallery')}
        </h1>
      </Slide>
      <Fade cascade direction="up" delay={500} triggerOnce>
        <Carousel />
      </Fade>
      <div className="mt-10 flex flex-col items-center">
        {data.videos.map((video, index) => (
          <Fade cascade direction="up" delay={500} damping={0.1} triggerOnce key={index}>
            <iframe
              className="my-10 border-0"
              width="853"
              height="505"
              src={`https://www.youtube.com/embed/${video.urlRef}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Fade>
        ))}
      </div>
    </section>
  );
};
