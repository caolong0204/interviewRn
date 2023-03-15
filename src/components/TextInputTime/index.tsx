import {IconAssets} from 'assets/icons';
import {TextInputCustom} from 'components/textInputCustom';
import * as React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface TextInputTimeProps {
  placeHolder?: string;
  style?: ViewStyle;
  onChangeText?: (value: string) => void;
  errorMsg?: string;
}

const TextInputTime = ({
  placeHolder,
  style: styleContainer,
  onChangeText,
  errorMsg = '',
}: TextInputTimeProps) => {
  const [time, setTime] = React.useState<string>();
  const handleChange = (value: string) => {
    let formattedValue: string = value;

    if (formattedValue.length === 3 && !formattedValue.includes(':')) {
      formattedValue = `${formattedValue.slice(0, 2)}:${formattedValue.slice(
        2,
      )}`;
    }

    setTime(formattedValue);
    onChangeText && onChangeText(formattedValue);
  };
  return (
    <View style={styles.container}>
      <TextInputCustom
        placeholder={placeHolder}
        rightChildren={<IconAssets.Clock />}
        style={styleContainer}
        keyboardType="numeric"
        maxLength={5}
        value={time}
        onChangeText={handleChange}
        errorMsg={errorMsg}
      />
    </View>
  );
};

export default TextInputTime;

const styles = StyleSheet.create({
  container: {flex: 1},
});
