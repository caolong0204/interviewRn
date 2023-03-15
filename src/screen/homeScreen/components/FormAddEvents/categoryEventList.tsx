import {EVENT_TYPE} from 'common/constant';
import ErrorLabel from 'components/errorLabel';
import TextCustom from 'components/textCustom';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, StyleSheet, ViewStyle, TextStyle} from 'react-native';

import CategoryEvent from './categoryEvent';

interface CategoryEventPickerProps {
  onPickEvent: (eventType: EVENT_TYPE) => void;
  errorMsg?: string;
  styleErrorText?: TextStyle;
  styleErrorContainer?: ViewStyle;
  isRequired?: boolean;
}

const CategoryEventPicker = ({
  onPickEvent,
  errorMsg,
  styleErrorText,
  styleErrorContainer,
  isRequired = false,
}: CategoryEventPickerProps) => {
  const [activeEvent, setActiveEvent] = useState<EVENT_TYPE>();
  const [error, setError] = useState(errorMsg);
  const handlePick = (eventType: EVENT_TYPE) => {
    setActiveEvent(eventType);
    onPickEvent && onPickEvent(eventType);
    setError('');
  };
  useEffect(() => {
    setError(errorMsg);
  }, [errorMsg]);
  const label = isRequired ? 'Select Category*' : 'Select Category';
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TextCustom style={styles.txtCategory}>{label}</TextCustom>
        <ErrorLabel
          errorMsg={error}
          textStyle={styleErrorText}
          style={styleErrorContainer}
        />
      </View>
      <View style={styles.container}>
        <CategoryEvent
          eventType={EVENT_TYPE.BRAINSTORM}
          onPress={handlePick}
          activeEvent={activeEvent}
        />
        <CategoryEvent
          eventType={EVENT_TYPE.DESIGN}
          onPress={handlePick}
          activeEvent={activeEvent}
        />
        <CategoryEvent
          eventType={EVENT_TYPE.WORKOUT}
          onPress={handlePick}
          activeEvent={activeEvent}
        />
      </View>
    </View>
  );
};

export default CategoryEventPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  txtCategory: {fontWeight: '400'},
});
