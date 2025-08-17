import { useTranslation, withTranslation } from 'react-i18next';
import { AboutUs, Button, Contact, ContentBlock, Gallery, Gigs, Jumbotron } from './components';
import { BLUE_DARK, BLUE_LIGHT, colorScheme, TRANSPARENT, WHITE } from './const';
import i18n from './i18n';
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
    <>
      <div className="fixed left-0 top-0 z-[-10] h-full w-full bg-[url('https://res.cloudinary.com/markjkeeble/image/upload/v1755342125/BluesJab/Photos/altegarage2025_13_small_robwvt.jpg')] bg-cover bg-center"></div>

      <div id="App-container" className="absolute top-0 z-0 w-full overscroll-none">
        <ContentBlock bgColor={TRANSPARENT} reducedPadding="top">
          <div className="relative flex flex-row justify-center pb-16 pt-4">
            <Button onClick={changeLanguage} text={t('switch_language')} colors={colorScheme.TRANSPARENT.button} />
          </div>
          <Jumbotron />
        </ContentBlock>
        <ContentBlock bgColor={WHITE}>
          <AboutUs colorSettings={colorScheme.WHITE} />
        </ContentBlock>

        {/* <Music /> */}
        <ContentBlock bgColor={BLUE_LIGHT}>
          <Gigs colorSettings={colorScheme.BLUE_LIGHT} />
        </ContentBlock>
        <ContentBlock bgColor={WHITE}>
          <Gallery colorSettings={colorScheme.WHITE} />
        </ContentBlock>
        <ContentBlock bgColor={BLUE_DARK} reducedPadding="bottom">
          <Contact />
        </ContentBlock>
      </div>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TranslatedApp = withTranslation()(App) as React.ComponentType<any>;
export default TranslatedApp;
