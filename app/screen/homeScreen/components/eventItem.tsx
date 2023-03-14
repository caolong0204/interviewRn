import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {IconAssets} from '../../../assets/icons';
import {EVENT_COLOR} from '../../../common/constant';
import TextCustom from '../../../components/textCustom';

interface EventItemProps {}

const EventItem = (props: EventItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeView}>
        <IconAssets.Circle fill={EVENT_COLOR.BRAINSTORM} />
        <TextCustom preset="txtSmallLight" style={styles.timeTxt}>
          02/09 10:00-13:00
        </TextCustom>
      </View>
      <TextCustom style={styles.titleTxt}>
        Design new UX flow for Michael
      </TextCustom>
      <TextCustom preset="txtSmallLight">Start from screen 16</TextCustom>
    </View>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  container: {marginVertical: 15},
  timeView: {flexDirection: 'row', alignItems: 'center'},
  timeTxt: {marginLeft: 10},
  titleTxt: {fontSize: 16, marginVertical: 8},
});
