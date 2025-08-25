import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import data from '../../../data/data.json';
import { ContentColorScheme, Video } from '../../types';
import Carousel from '../carousel';
import {SectionHeading} from '../contentBlock';

interface AboutUsProps {
  colorSettings: ContentColorScheme;
}

export const Gallery = ({ colorSettings }: AboutUsProps) => {
  const { t } = useTranslation();
  const [videos] = useState<Video[]>(data.videos);
  // const [videos, setVideos] = useState<Video[]>([]);
  // const apiUrl = import.meta.env.VITE_API_URL;

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}\\videos`);
  //       const data = await response.json();
  //       setVideos(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchVideos();
  // }, [apiUrl]);

  return (
    <section id="gallery">
      <SectionHeading textColor={colorSettings.h1} text={t('sections.gallery')} />


      <Carousel colorSettings={colorSettings} />

      <div className="mt-2 flex flex-col items-center">
        {videos.map((video, index) => (
          <iframe
            className="my-2 md:my-10 max-w-full border-0"
            width="853"
            height="505"
            src={`https://www.youtube.com/embed/${video.urlRef}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            key={index}
          ></iframe>
        ))}
      </div>
    </section>
  );
};
