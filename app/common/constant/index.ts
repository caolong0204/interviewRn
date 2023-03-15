import {Dimensions} from 'react-native';

export const STORAGE_ID = 'interview.test';
export const STORAGE_KEY = 'interview.test';

export enum EVENT_COLOR {
  BRAINSTORM = '#735BF2',
  DESIGN = '#00B383',
  WORKOUT = '#0095FF',
}

export enum EVENT_TYPE {
  BRAINSTORM = 'BRAINSTORM',
  DESIGN = 'DESIGN',
  WORKOUT = 'WORKOUT',
}

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export const FORMAT_MONTH_TIME = 'MM/YYYY';
