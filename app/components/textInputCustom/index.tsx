import React, {ForwardedRef, forwardRef} from 'react';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {ThemeApp} from '../../styles/ThemeApp';
import {isNullOrEmpty} from '../../utils/validate';
import ErrorLabel from '../errorLabel';

import {TextInputPresets} from './preset';

import {styles} from './styles';
import {TextInputProps} from './type';

export const TextInputCustom = forwardRef(
  (
    {
      editable = true,
      rxFormat,
      multiline,
      placeholder,
      leftChildren,
      rightChildren,
      placeholderTextColor = ThemeApp.grayTxt,
      errorMsg,
      onBlur,
      onFocus,
      onChangeText,
      value,
      style: styleOverride = {},
      styleErrorContainer,
      styleErrorText,
      preset = 'default',
      ...rest
    }: TextInputProps,
    ref: ForwardedRef<RNTextInput>,
  ) => {
    const handleTextChange = (text: string) => {
      const actualText =
        rxFormat !== undefined ? text.replace(rxFormat, '') : text;
      onChangeText && onChangeText(actualText);
    };

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus && onFocus(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur && onBlur(e);
    };
    const isError = !isNullOrEmpty(errorMsg);
    let newStyle: any = {};
    if (Array.isArray(styleOverride)) {
      newStyle = [(TextInputPresets as any)[preset], ...styleOverride];
    } else {
      newStyle = [(TextInputPresets as any)[preset], styleOverride];
    }
    return (
      <>
        <View
          style={[
            styles.containerInput,
            newStyle,
            isError ? styles.inputError : {},
          ]}>
          {leftChildren}
          <RNTextInput
            {...rest}
            ref={ref}
            editable={editable}
            autoCorrect={false}
            clearButtonMode={'never'}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={
              editable === false ? ThemeApp.grayTxt : placeholderTextColor
            }
            value={value}
            placeholder={placeholder}
            style={[
              styles.input,
              !editable ? {color: ThemeApp.grayTxt} : {},
              multiline && styles.multiline,
            ]}
            multiline={multiline}
            onChangeText={handleTextChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {rightChildren}
        </View>
        <ErrorLabel
          errorMsg={errorMsg}
          textStyle={styleErrorText}
          style={styleErrorContainer}
        />
      </>
    );
  },
);
