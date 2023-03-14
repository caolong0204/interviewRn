import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ThemeApp} from '../../styles/ThemeApp';

export const TextInputPresets = StyleSheet.create({
  default: {
    borderWidth: 1,
    borderColor: ThemeApp.borderLine,
  },
});

export type TextInputPresetName = keyof typeof TextInputPresets;

export type LabelProps = {
  /**
   * Label of text input
   */
  label?: string;

  /**
   * Add red dot right label or not
   * @default false
   */
  required?: boolean;
  styleLabelContainer?: ViewStyle;
  styleLabelText?: TextStyle;
};
