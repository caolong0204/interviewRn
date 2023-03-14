import * as React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {IconAssets} from '../../assets/icons';
import {SCREEN_WIDTH} from '../../common/constant';

interface ButtonAddProps {
  onPress?: () => void;
  styleContainer?: ViewStyle;
}

const ButtonAdd = ({onPress, styleContainer}: ButtonAddProps) => {
  const handlePress = () => {
    onPress && onPress();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <IconAssets.Add />
    </TouchableOpacity>
  );
};

export default ButtonAdd;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#735BF2',
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    position: 'absolute',
    bottom: 40,
    left: SCREEN_WIDTH / 2 - 23,
  },
});
