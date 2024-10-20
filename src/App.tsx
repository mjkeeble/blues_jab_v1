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
  console.log('test updated Netlify settings');
  return (
    <div className="dark">
      <div className="fixed left-0 top-0 z-[-10] h-full w-full bg-[url('/cracked-concrete-wall-textured-background-blue.jpg')] bg-cover bg-center"></div>

      <div id="App-container" className="absolute top-0 z-0 w-full overscroll-none">
        {/* <Navbar /> */}
        <div className="mt-2 flex flex-row justify-center">
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
