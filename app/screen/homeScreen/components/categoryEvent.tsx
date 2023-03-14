import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {IconAssets} from '../../../assets/icons';
import {EVENT_TYPE} from '../../../common/constant';
import TextCustom from '../../../components/textCustom';

interface CategoryEventProps {
  eventType: EVENT_TYPE;
  onPress: (eventType: EVENT_TYPE) => void;
  activeEvent?: EVENT_TYPE;
}

const CategoryEvent = ({
  eventType,
  onPress,
  activeEvent,
}: CategoryEventProps) => {
  const {background, circleColor} = getColorEvent(eventType);
  const content = getContent(eventType);
  const handlePress = () => {
    onPress && onPress(eventType);
  };
  const isPicked = activeEvent === eventType;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: background},
        isPicked && {borderWidth: 1, borderColor: circleColor},
      ]}
      onPress={handlePress}>
      <IconAssets.Circle fill={circleColor} style={{marginHorizontal: 5}} />
      <TextCustom style={{marginLeft: 5}}>{content}</TextCustom>
    </TouchableOpacity>
  );
};

export default CategoryEvent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 13,
    borderRadius: 10,
    backgroundColor: 'rgba(115,91,242,0.1)',
    alignSelf: 'center',
  },
});

const getColorEvent = (eventType: EVENT_TYPE) => {
  switch (eventType) {
    case EVENT_TYPE.BRAINSTORM:
      return {background: 'rgba(115,91,242,0.1)', circleColor: '#735BF2'};
    case EVENT_TYPE.DESIGN:
      return {background: 'rgba(0,179,131,0.1)', circleColor: '#00B383'};
    case EVENT_TYPE.WORKOUT:
      return {background: 'rgba(0,149,255,0.1)', circleColor: '#0095FF'};
  }
};

const getContent = (eventType: EVENT_TYPE) => {
  switch (eventType) {
    case EVENT_TYPE.BRAINSTORM:
      return 'Brain Storm';
    case EVENT_TYPE.DESIGN:
      return 'Design';
    case EVENT_TYPE.WORKOUT:
      return 'Workout';
  }
};
