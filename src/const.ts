import { ContentBlockColors } from './types';

export const bgColors = {
  TRANSPARENT: 'backdrop-opacity-100',
  WHITE: 'bg-bj-white',
  BLUE_LIGHT: 'bg-bj-blue-light',
  BLUE_MID: 'bg-bj-blue-mid',
  BLUE_DARK: 'bg-bj-blue-dark',
};

export const colorScheme: ContentBlockColors = {
  TRANSPARENT: {
    body: 'backdrop-opacity-100',
    margins: 'backdrop-opacity-100',
    h1: 'text-bj-blue-light',
    text: 'text-bj-white',
    cardBg: 'bg-bj-blue-dark',
    cardH1: 'text-bj-blue-light',
    cardText: 'text-bj-blue-light',
    button: {
      bg: 'bg-bj-white',
      text: 'text-bj-blue-dark',
      bgHover: 'bg-bj-blue-mid',
    },
  },
  BLUE_LIGHT: {
    body: 'bg-bj-blue-light',
    margins: 'bg-bj-blue-light',
    h1: 'text-bj-blue-dark',
    text: 'text-black',
    cardBg: 'bg-bj-white',
    cardH1: 'text-bj-blue-dark',
    cardText: 'text-bj-blue-dark',
    button: {
      bg: 'bg-bj-blue-dark',
      text: 'text-bj-white',
      bgHover: 'bg-bj-blue-mid',
    },
  },
  BLUE_MID: {
    body: 'bg-bj-blue-mid',
    margins: 'bg-bj-white',
    h1: 'text-bj-white',
    text: 'text-bj-white',
    cardBg: 'bg-bj-blue-light',
    cardH1: 'text-bj-blue-dark',
    cardText: 'text-bj-blue-dark',
    button: {
      bg: 'bg-bj-green',
      text: 'text-bj-white',
      bgHover: 'bg-bj-green-dark',
    },
  },
  BLUE_DARK: {
    body: 'bg-bj-blue-dark',
    margins: 'backdrop-opacity-100',
    h1: 'text-bj-blue-light',
    text: 'text-bj-white',
    cardBg: 'bg-bj-blue-mid',
    cardH1: 'text-bj-blue-light',
    cardText: 'text-bj-blue-white',
    button: {
      bg: 'bg-bj-white',
      text: 'text-bj-blue-dark',
      bgHover: 'bg-bj-blue-light',
    },
  },
  WHITE: {
    body: 'bg-bj-white',
    margins: 'bg-bj-white',
    h1: 'text-bj-blue-mid',
    text: 'text-bj-blue-dark',
    cardBg: 'bg-bj-blue-light',
    cardH1: 'text-bj-blue-dark',
    cardText: 'text-bj-blue-dark',
    button: {
      bg: 'bg-bj-red',
      text: 'text-bj-white',
      bgHover: 'bg-bj-red-dark',
    },
  },
};

export const TRANSPARENT = 'TRANSPARENT';
export const WHITE = 'WHITE';
export const BLUE_MID = 'BLUE_MID';
export const BLUE_DARK = 'BLUE_DARK';
export const BLUE_LIGHT = 'BLUE_LIGHT';
