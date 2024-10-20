import { BLUE_DARK, BLUE_LIGHT, BLUE_MID, TRANSPARENT, WHITE } from './const';

export type Translation = {
  en: string;
  de: string;
};

export type Gig = {
  index: number;
  venue: string;
  town: string;
  dateTime: string;
  comment?: Translation;
  mapUrl: string;
};

export type Member = {
  name: string;
  image: string;
};

export type Photo = {
  fileId: string;
};

export type Video = {
  title: string;
  urlRef: string;
};

export type BGColor = typeof TRANSPARENT | typeof WHITE | typeof BLUE_MID | typeof BLUE_DARK | typeof BLUE_LIGHT;

export interface ContentBlockColors {
  [key: string]: ContentColorScheme;
}

export type ContentColorScheme = {
  body: string;
  margins: string;
  h1: string;
  text: string;
  cardBg: string;
  cardH1: string;
  cardText: string;
  button: {
    bg: string;
    text: string;
    bgHover: string;
  }
};
