import {IconAssets} from 'assets/icons';
import {EVENT_COLOR, EVENT_TYPE} from 'common/constant';
import TextCustom from 'components/textCustom';
import moment from 'moment';
import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeApp} from 'styles/ThemeApp';

interface EventItemProps {
  infor: IEventItem;
}
const MAX_LENGTH = 30;
const EventItem = ({infor}: EventItemProps) => {
  const [isShowMore, setIsShowMore] = React.useState(false);
  const periodTime =
    infor.start || infor.end ? `${infor.start || ''}-${infor.end || ''}` : '';
  return (
    <View style={styles.container}>
      <View style={styles.timeView}>
        <IconAssets.Circle fill={getColorEvent(infor.categoryEvent)} />
        <TextCustom preset="txtSmallLight" style={styles.timeTxt}>
          {`${moment(infor.date).format('DD/MM')} ${periodTime}`}
        </TextCustom>
      </View>
      <TextCustom style={styles.titleTxt}>{infor.name}</TextCustom>
      {infor.note && (
        <View style={styles.noteView}>
          <TextCustom
            preset="txtSmallLight"
            numberOfLines={isShowMore ? 1000 : 1}
            style={styles.contentNote}>
            {infor.note}
          </TextCustom>
          {(infor.note?.length || 0) > MAX_LENGTH && (
            <TouchableOpacity
              style={styles.btnTxt}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              onPress={() => {
                setIsShowMore(!isShowMore);
              }}>
              <TextCustom style={styles.labelBtnTxt}>
                {!isShowMore ? 'View More' : 'Hide'}
              </TextCustom>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};
const getColorEvent = (event: EVENT_TYPE) => {
  switch (event) {
    case EVENT_TYPE.BRAINSTORM:
      return EVENT_COLOR.BRAINSTORM;
    case EVENT_TYPE.DESIGN:
      return EVENT_COLOR.DESIGN;
    case EVENT_TYPE.WORKOUT:
      return EVENT_COLOR.WORKOUT;
    default:
      return ThemeApp.borderLine;
  }
};
export default EventItem;

const styles = StyleSheet.create({
  container: {marginVertical: 8},
  timeView: {flexDirection: 'row', alignItems: 'center'},
  timeTxt: {marginLeft: 10},
  titleTxt: {fontSize: 16, marginVertical: 8},
  labelBtnTxt: {
    fontSize: 12,
    fontStyle: 'italic',
    color: ThemeApp.grayTxt,
    fontWeight: '200',
  },
  btnTxt: {paddingHorizontal: 10},
  noteView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contentNote: {maxWidth: '80%'},
});
