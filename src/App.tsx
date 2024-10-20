import { useTranslation, withTranslation } from 'react-i18next';
import i18n from './i18n';

import { AboutUs, Button, Contact, Gallery, Gigs, Jumbotron } from './components';
import './index.css';

const App = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const changeLanguage = () => {
    if (currentLanguage === 'de') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('de');
    }
  };
  return (
    <div className="dark">
      <div className="fixed top-0 left-0 w-full h-full z-[-10] bg-[url('/cracked-concrete-wall-textured-background-blue.jpg')] bg-center bg-cover"></div>

      <div id="App-container" className="z-0 overscroll-none absolute top-0 w-full">
        {/* <Navbar /> */}
        <div className="flex flex-row justify-center mt-2">
          <Button onClick={changeLanguage} text={t('switch_language')} />
        </div>
        <div className=" flex flex-row justify-center">
          <div className="w-full 2xl:w-[71rem]">
            <Jumbotron />
            <AboutUs />
            {/* <Music /> */}
            <Gigs />
            <Gallery />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TranslatedApp = withTranslation()(App) as React.ComponentType<any>;
export default TranslatedApp;
