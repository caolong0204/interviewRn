import * as React from 'react';
import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {EVENT_TYPE} from '../../../common/constant';
import CategoryEvent from './categoryEvent';

interface CategoryEventListProps {
  onPickEvent: (eventType: EVENT_TYPE) => void;
}

const CategoryEventList = ({onPickEvent}: CategoryEventListProps) => {
  const [activeEvent, setActiveEvent] = useState<EVENT_TYPE>();
  const handlePick = (eventType: EVENT_TYPE) => {
    setActiveEvent(eventType);
    onPickEvent && onPickEvent(eventType);
  };
  return (
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
  );
};

export default CategoryEventList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
});
