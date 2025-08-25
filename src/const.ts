import { ContentBlockColors } from './types';

export const colorScheme: ContentBlockColors = {
  TRANSPARENT: {
    body: 'backdrop-opacity-100',
    margins: 'backdrop-opacity-100',
    h1: 'text-bj-blue-dark',
    text: 'text-bj-white',
    cardBg: 'bg-bj-blue-dark',
    cardH1: 'text-bj-blue-light',
    cardText: 'text-bj-blue-light',
    button: {
      bg: 'bg-bj-blue-light',
      text: 'text-bj-blue-dark',
      bgHover: 'bg-bj-blue-mid',
    },
  },
  BLUE_LIGHT: {
    body: 'bg-bj-blue-light/80',
    margins: 'bg-bj-blue-light/40',
    h1: 'text-bj-blue-dark',
    text: 'text-black',
    cardBg: 'bg-bj-white',
    cardH1: 'text-bj-blue-dark',
    cardText: 'text-bj-blue-dark',
    button: {
      bg: 'bg-bj-white',
      text: 'text-bj-blue-dark',
      bgHover: 'bg-bj-blue-mid',
    },
  },
  BLUE_MID: {
    body: 'bg-bj-blue-mid/80',
    margins: 'bg-bj-white/40',
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
    body: 'bg-bj-blue-dark/60',
    margins: '',
    h1: 'text-bj-white',
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
    body: 'bg-bj-white/80',
    margins: 'bg-bj-white/40',
    h1: 'text-bj-blue-dark',
    text: 'text-bj-blue-dark',
    cardBg: 'bg-bj-green-dark',
    cardH1: 'text-bj-white',
    cardText: 'text-bj-white',
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
