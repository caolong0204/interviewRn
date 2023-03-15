import {StyleSheet} from 'react-native';
import {ThemeApp} from 'styles/ThemeApp';

export const textPresets = StyleSheet.create({
  txtHeader: {
    color: ThemeApp.normalTxt,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  txtSmallLight: {
    color: ThemeApp.grayTxt,
    fontSize: 12,
  },
  default: {color: ThemeApp.normalTxt, fontWeight: '500'},
});

export type TextPresetNames = keyof typeof textPresets;
