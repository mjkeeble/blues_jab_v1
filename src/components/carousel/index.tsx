import { AdvancedImage } from '@cloudinary/react';
import { fit } from '@cloudinary/url-gen/actions/resize';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import data from '../../../data/data.json';
import { cld } from '../../services/cloudinaryInstance';
import { ContentColorScheme, Photo } from '../../types';
import { NextButton, PrevButton } from './CarouselButtons';

type GalleryProps = {
  colorSettings: ContentColorScheme;
};

const OPTIONS: EmblaOptionsType = { loop: true };

const Carousel = ({ colorSettings }: GalleryProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [photos] = useState<Photo[]>(data.photos);
  const { t } = useTranslation();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {photos.map((photo, index) => {
          const image = cld.image(`bluesjab/photos/${photo.fileId}`).resize(
            fit()
              .width(Math.min(windowWidth, 1154))
              .height(Math.min(Math.floor(windowHeight * 0.75), 576)),
          );
          return (
            <div className="w-full flex-none md:px-7" key={index}>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <AdvancedImage cldImg={image} />

                  <p className={`${colorSettings.text} text-right text-xs`}>{`${t('source')}: ${
                    photo.source || 'Blues Jab'
                  }`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex flex-row justify-around">
        <div className="grid grid-cols-2 items-center gap-7  rounded-full bg-bj-blue-light">
          <PrevButton onClick={scrollPrev} color="bg-blue-dark" />
          <NextButton onClick={scrollNext} color="bg-blue-dark" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
