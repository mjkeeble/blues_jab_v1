import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import data from '../../../data/data.json';
import { Button } from '../../components';
import { ContentColorScheme, Gig } from '../../types';
import EventCard from './eventCard';

interface AboutUsProps {
  colorSettings: ContentColorScheme;
}

export const Gigs = ({ colorSettings }: AboutUsProps) => {
  const { t } = useTranslation();
  const [gigs] = useState<Gig[]>(data.gigs);
  // const [gigs, setGigs] = useState<Gig[]>([]);
  // const apiUrl = import.meta.env.VITE_API_URL;

  // useEffect(() => {
  //   const fetchGigs = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}\\gigs`);
  //       const data = await response.json();
  //       const sortedData = data.sort(
  //         (a: Gig, b: Gig) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime(),
  //       );
  //       setGigs(sortedData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchGigs();
  // }, [apiUrl]);

  const pastGigs = gigs.filter((gig) => new Date(gig.dateTime) < new Date());
  const futureGigs = gigs.filter((gig) => new Date(gig.dateTime) >= new Date());

  const [showPastGigs, setShowPastGigs] = useState(false);
  const handleClick = () => {
    setShowPastGigs(!showPastGigs);
  };

  if (gigs.length) {
    return (
      <section className="pb-12">
        <div id="gigs" className="mb-12 flex flex-row items-center justify-between">
          <h1 className={`ml-2 h-min font-fredericka text-4xl ${colorSettings.h1} md:text-6xl`}>Gigs</h1>
          {pastGigs.length ? (
            <Button
              text={showPastGigs ? 'hide_past_gigs' : 'show_past_gigs'}
              onClick={handleClick}
              colors={colorSettings.button}
            />
          ) : null}
        </div>
        <div className="mx-8 grid grid-cols-1 justify-items-center gap-x-4 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {/* gig cards */}

          <Fade cascade direction={'up'} triggerOnce duration={700} damping={0.1}>
            {showPastGigs &&
              gigs
                .filter((gig) => new Date(gig.dateTime) < new Date())
                .map((gig, index) => {
                  return <EventCard gig={gig} status="past" key={index} />;
                })}
            {gigs.filter((gig) => new Date(gig.dateTime) >= new Date()).length && (
              <EventCard gig={futureGigs[0]} status="next" />
            )}

            {gigs.filter((gig) => new Date(gig.dateTime) >= new Date()).length > 1 &&
              gigs
                .filter((gig) => new Date(gig.dateTime) >= new Date())
                .slice(1, futureGigs.length)
                .map((gig, index) => {
                  return <EventCard gig={gig} status="future" key={index} />;
                })}
          </Fade>
        </div>
        {!futureGigs.length && (
          <div>
            <Fade direction={'up'} triggerOnce duration={700} damping={0.1}>
              <p className="text-md mx-24 mt-3 text-bj-blue-dark dark:text-bj-white md:text-3xl">{t('no_gigs')}</p>
            </Fade>
          </div>
        )}
      </section>
    );
  }
  return <p className="m-2 h-min font-fredericka text-bj-blue dark:text-bj-blue-light">No events available</p>;
};
