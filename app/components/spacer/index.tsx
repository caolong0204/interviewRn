import React, {useMemo} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {SpacerProps} from './type';

export const Spacer = ({height = 0, width = 0}: SpacerProps) => {
  // style
  const actualStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      width,
      height,
    }),
    [height, width],
  );

  // render
  return <View style={actualStyle} />;
};
