import { JackInTheBox } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { Gig } from '../../types';

// TODO: Add location icon as alternative to text link on small screens
// <FontAwesomeIcon icon="fa-solid fa-map-location-dot" />
// <FontAwesomeIcon icon="fa-solid fa-location-dot" />

type EventStatus = 'past' | 'next' | 'future';

type EventCardProps = {
  gig: Gig;
  status: EventStatus;
};

type Comment = {
  [key: string]: string;
};

const dateDisplayOptions = {
  year: 'numeric' as const,
  month: 'short' as const,
  day: 'numeric' as const,
};

const timeDisplayOptions = {
  hour: 'numeric' as const,
  minute: '2-digit' as const,
};

const EventCard: React.FC<EventCardProps> = ({ gig, status }) => {
  const { t } = useTranslation();
  const dateTime = new Date(gig.dateTime);
  const bgColors = {
    past: 'bg-bj-white/100',
    next: 'bg-bj-red/100',
    future: 'bg-bj-blue-mid',
  };

  const textColors = {
    past: 'text-bj-blue',
    next: 'text-bj-white',
    future: 'text-bj-white',
  };

  const hasNoTime = (dateString: string): boolean => {
    const date = new Date(dateString);
    return date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0;
  };

  return (
    <div
      className={`relative ${textColors[status]} w-full rounded p-3 md:min-h-[300px] md:w-64 md:p-6 ${bgColors[status]} flex flex-col justify-start opacity-75 drop-shadow-2xl`}
    >
      <div>
        <div className="flex flex-row justify-between text-xs font-semibold md:text-sm">
          <p>{dateTime.toLocaleDateString(i18n.language, dateDisplayOptions)}</p>
          {hasNoTime(dateTime.toISOString()) || <p>{dateTime.toLocaleTimeString(i18n.language, timeDisplayOptions)}</p>}
        </div>
        <div>
          <p className="mt-4 font-fredericka text-sm md:text-lg">{`${gig.venue},`}</p>
          <p className="font-fredericka text-sm md:text-lg">{gig.town}</p>
          {gig.mapUrl && (
            <a href={gig.mapUrl} target="_blank" rel="noopener">
              <p
                className={`text-xs md:text-sm ${
                  ['future', 'next'].includes(status) ? 'text-bj-blue-light' : 'text-bj-blue-dark'
                } underline underline-offset-2`}
              >
                {t('show_map')}
              </p>
            </a>
          )}
        </div>

        {gig.comment && (
          <p className="grow-1 pt-4 text-xs  md:text-sm">{(gig.comment as Comment)[i18n.language.substring(0, 2)]}</p>
        )}

        {gig.link && (
          <a
            href={gig.link}
            target="_blank"
            rel="noopener"
            className={`my-3 md:my-6 inline-block rounded-md border bg-bj-red px-2 py-2 text-xs font-semibold text-bj-white drop-shadow-lg hover:bg-bj-red-dark md:text-sm`}
          >
            {t(gig.linkType || 'more_information')}
          </a>
        )}
      </div>

      {/* TODO: Correct positioning of 'next gig' overlay in English on larger screens */}
      {status === 'next' && (
        <JackInTheBox className="absolute -bottom-2 right-8 md:right-0 z-10 " delay={700} duration={500}>
          <p className="mx-auto -rotate-6 bg-bj-blue-dark p-2 font-fredericka text-sm dark:bg-bj-blue-light dark:text-bj-blue-dark md:text-xl">
            {t('next_gig')}
          </p>
        </JackInTheBox>
      )}
    </div>
  );
};

export default EventCard;
