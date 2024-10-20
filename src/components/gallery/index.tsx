import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ContentColorScheme, Video } from "../../types";
import Carousel from "../carousel";

interface AboutUsProps {
  colorSettings: ContentColorScheme;
}

export const Gallery = ({ colorSettings }: AboutUsProps) => {
  const { t } = useTranslation();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3000/videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section id="gallery">
			<h1 className={`m-2 ml-4 pb-6 font-fredericka text-2xl ${colorSettings.h1} md:text-6xl`}>
        {t('sections.gallery')}
      </h1>

      <Carousel />

      <div className="mt-10 flex flex-col items-center">
        {videos.map((video, index) => (
          <iframe
            className="my-10 border-0"
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
