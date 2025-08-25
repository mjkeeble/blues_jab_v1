import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AttentionSeeker } from 'react-awesome-reveal';

import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact">
      
        <h1 className="text-center font-fredericka text-3xl text-bj-blue-light md:text-5xl">
          {t('sections.contact')}
        </h1>
      

      <div className="my-4 flex w-full justify-center md:my-8">
        <a
          href="mailto:bluesjab@keeble.email"
          className="text-sm w-['100%'] font-normal text-bj-white underline md:text-2xl hover:scale-110"
        >
          {t('send_email')}
        </a>
      </div>
      <div className="my-4 flex w-full justify-center md:my-8 ">
        <a href="https://www.facebook.com/BluesJab" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="text-2xl md:text-5xl hover:scale-110" icon={faFacebookSquare} />
        </a>
      </div>

      <hr className="mt-4 border-t border-bj-white" />
      <div className="mx-4 flex text-xs md:text-sm justify-between pb-3 pt-4 align-bottom">
        <p className="grow-1">&copy; Blues Jab, {new Date().getFullYear()}</p>
        <div className="flex grow-0 justify-between align-bottom">
          <p>Web design by</p>
          <AttentionSeeker effect="shake" delay={1500} triggerOnce>
            <a href="https://www.keeble.de">
              <img src="/mjk_logo4 white.svg" className="ml-1 md:ml-3 w-6 md:w-8 hover:scale-125" />
            </a>
          </AttentionSeeker>
        </div>
      </div>
    </footer>
  );
};
