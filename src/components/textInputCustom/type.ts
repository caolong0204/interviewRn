import React from 'react';
import {
  ColorValue,
  TextInputProps as RNTextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {TextInputPresetName} from './preset';

export type TextInputProps = RNTextInputProps & {
  /**
   * Fill placeholder color by Theme
   * @default undefined
   */
  placeholderTextColorTheme?: keyof ColorValue;
  /**
   * Children right input.(ex:Icon show/hide password)
   */
  leftChildren?: React.ReactNode;
  /**
   * Children right input.(ex:Icon show/hide password)
   */
  rightChildren?: React.ReactNode;
  preset?: TextInputPresetName;
  errorMsg?: string;
  styleErrorContainer?: ViewStyle;
  styleErrorText?: TextStyle;
  isRequired?: boolean;
};
