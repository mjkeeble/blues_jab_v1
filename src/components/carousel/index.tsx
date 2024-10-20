import { AdvancedImage } from '@cloudinary/react';
import { fit } from '@cloudinary/url-gen/actions/resize';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { cld } from '../../services/cloudinaryInstance';
import { NextButton, PrevButton } from './CarouselButtons';
import {usePrevNextButtons} from './buttonHandlers';
import { Photo } from '../../types';
// import {focusOn} from '@cloudinary/url-gen/qualifiers/gravity';
// import {FocusOn} from '@cloudinary/url-gen/qualifiers/focusOn';

const OPTIONS: EmblaOptionsType = { loop: true };

const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [photos, setPhotos] = useState<Photo[]>([]);

	useEffect(() => {
		const fetchPhotos = async () => {
			try {
				const response = await fetch("http://localhost:3000/photos");
				const data = await response.json();
				setPhotos(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchPhotos();
	}, []);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

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
    <section className="mx-auto max-w-6xl">
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {photos.map((photo, index) => {
            const image = cld.image(`bluesjab/photos/${photo.fileId}`).resize(
              fit()
                .width(Math.min(windowWidth, 1154))
                .height(Math.min(Math.floor(windowHeight / 3), 576)),
            );
            return (
              <div className="w-full flex-none px-7" key={index}>
                <div className="flex items-center justify-center shadow-inner">
                  <AdvancedImage cldImg={image} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="grid grid-cols-2 items-center gap-7">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} color="bg-blue-dark" />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} color="bg-blue-dark" />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
