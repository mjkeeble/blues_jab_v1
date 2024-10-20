import {useTranslation} from "react-i18next";
import {Gig} from "../../types";
import i18n from "../../i18n";
import {JackInTheBox} from "react-awesome-reveal";

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
    past: 'bg-bj-blue-light',
    next: 'bg-bj-red-dark',
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
    <>
      <div
        className={`relative ${textColors[status]} min-h-[300px] w-64 rounded p-6 ${bgColors[status]} flex flex-col justify-between opacity-75 drop-shadow-2xl`}
      >
        <div className="drop-shadow-2xl">
          <div className="flex flex-row justify-between font-semibold">
            <p className="text-xl">{dateTime.toLocaleDateString(i18n.language, dateDisplayOptions)}</p>
            {hasNoTime(dateTime.toISOString()) || (
              <p className="text-xl">{dateTime.toLocaleTimeString(i18n.language, timeDisplayOptions)}</p>
            )}
          </div>
          <p className="mt-4 font-fredericka text-2xl">{`${gig.venue},`}</p>
          <p className="font-fredericka text-2xl">{gig.town}</p>
          {gig.mapUrl && (
            <a href={gig.mapUrl} target="_blank" rel="noopener">
              <p
                className={`text-md ${
                  ['future', 'next'].includes(status) ? 'text-bj-blue-light' : 'text-bj-blue-dark'
                } underline underline-offset-2`}
              >
                {t('show_map')}
              </p>
            </a>
          )}
        </div>
        {gig.comment && <p className="text-lg">{(gig.comment as Comment)[i18n.language.substring(0, 2)]}</p>}
      </div>
      {status === 'next' && (
        <JackInTheBox className="" delay={700} duration={500}>
          <p className="absolute -bottom-7 -right-3 mx-auto -rotate-6 bg-bj-blue-dark p-2 font-fredericka text-2xl dark:bg-bj-blue-light dark:text-bj-blue-dark">
            {t('next_gig')}
          </p>
        </JackInTheBox>
      )}
    </>
  );
};

export default EventCard;
