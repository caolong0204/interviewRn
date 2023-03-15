import TextCustom from 'components/textCustom';
import * as React from 'react';
import {View, StyleSheet, Switch} from 'react-native';

interface RemindToggleProps {
  onSwitch?: (value: boolean) => void;
}

const RemindToggle = ({onSwitch}: RemindToggleProps) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const handleToggleSwitch = () => {
    setIsEnabled(previousState => {
      onSwitch && onSwitch(!previousState);
      return !previousState;
    });
  };
  return (
    <View style={styles.remindField}>
      <TextCustom style={styles.labelTxt}>Reminds me</TextCustom>
      <Switch
        trackColor={{false: '#CED3DE', true: '#0276FD'}}
        thumbColor={isEnabled ? '#003F87' : '#f4f3f4'}
        ios_backgroundColor="#CED3DE"
        onValueChange={handleToggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default RemindToggle;

const styles = StyleSheet.create({
  remindField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  labelTxt: {fontWeight: '300'},
});
