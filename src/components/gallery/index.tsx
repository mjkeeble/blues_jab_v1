import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import data from '../../../data/data.json';
import { ContentColorScheme, Video } from '../../types';
import Carousel from '../carousel';

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
      <h1 className={`m-2 ml-4 pb-6 font-fredericka text-4xl ${colorSettings.h1} md:text-6xl`}>
        {t('sections.gallery')}
      </h1>

      <Carousel />

      <div className="mt-10 flex flex-col items-center">
        {videos.map((video, index) => (
          <iframe
            className="my-10 max-w-full border-0"
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
