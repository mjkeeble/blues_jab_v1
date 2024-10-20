import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AttentionSeeker, Zoom } from 'react-awesome-reveal';

import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact">
      <Zoom triggerOnce duration={500}>
        <h1 className="m-2 text-center font-fredericka text-2xl text-bj-blue-light md:text-6xl">
          {t('sections.contact')}
        </h1>
      </Zoom>

      <div className="my-14 flex w-full justify-center">
        <a
          href="mailto:mjkeeble@yahoo.de"
          className="text-md w-['100%'] font-normal text-bj-white underline md:text-3xl"
        >
          {t('send_email')}
        </a>
      </div>
      <div className="my-14 flex w-full justify-center">
        <a href="https://www.facebook.com/BluesJab" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="text-5xl" icon={faFacebookSquare} />
        </a>
      </div>

      <hr className="mt-8 border-t border-bj-white" />
      <div className="mx-4 flex justify-between pb-3 pt-4 align-bottom">
        <p className="grow-1">&copy; Blues Jab, {new Date().getFullYear()}</p>
        <div className="flex grow-0 justify-between align-bottom">
          <p>Web design by</p>
          <AttentionSeeker effect="shake" delay={1500} triggerOnce>
            <a href="https://www.keeble.de">
              <img src="/mjk_logo4 white.svg" className="ml-3 w-8" />
            </a>
          </AttentionSeeker>
        </div>
      </div>
    </footer>
  );
};
