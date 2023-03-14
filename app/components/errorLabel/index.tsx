import * as React from 'react';
import {View, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {ThemeApp} from '../../styles/ThemeApp';
import {isNullOrEmpty} from '../../utils/validate';

interface ErrorLabelProps {
  style?: ViewStyle;
  textStyle?: TextStyle;
  errorMsg?: string;
}

const ErrorLabel = ({style, textStyle, errorMsg}: ErrorLabelProps) => {
  const aniamtedValue = useSharedValue(0);
  React.useEffect(() => {
    if (errorMsg) {
      aniamtedValue.value = withSpring(20, {
        damping: 1,
        mass: 0.1,
        stiffness: 100,
      });
    } else {
      aniamtedValue.value = withSpring(0);
    }
    return () => {
      aniamtedValue.value = withSpring(0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMsg]);
  const isError = !isNullOrEmpty(errorMsg);
  const textAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(aniamtedValue.value, [0, 20], [-10, 5], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    return {transform: [{translateX}]};
  }, []);
  return (
    <View style={style}>
      {isError && (
        <Animated.Text style={[styles.textError, textStyle, textAnimatedStyle]}>
          {errorMsg}
        </Animated.Text>
      )}
    </View>
  );
};

export default ErrorLabel;

const styles = StyleSheet.create({
  textError: {
    color: ThemeApp.grayTxt,
    paddingLeft: 8,
    marginTop: 2,
    fontSize: 13,
  },
});
