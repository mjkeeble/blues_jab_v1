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
