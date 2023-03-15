import {IconAssets} from 'assets/icons';
import {EVENT_COLOR, EVENT_TYPE} from 'common/constant';
import TextCustom from 'components/textCustom';
import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

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
      <IconAssets.Circle fill={circleColor} style={styles.iconCircle} />
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
  iconCircle: {marginHorizontal: 5},
});

const getColorEvent = (eventType: EVENT_TYPE) => {
  switch (eventType) {
    case EVENT_TYPE.BRAINSTORM:
      return {
        background: 'rgba(115,91,242,0.1)',
        circleColor: EVENT_COLOR.BRAINSTORM,
      };
    case EVENT_TYPE.DESIGN:
      return {
        background: 'rgba(0,179,131,0.1)',
        circleColor: EVENT_COLOR.DESIGN,
      };
    case EVENT_TYPE.WORKOUT:
      return {
        background: 'rgba(0,149,255,0.1)',
        circleColor: EVENT_COLOR.WORKOUT,
      };
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
