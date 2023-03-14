import moment from 'moment';
import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {IconAssets} from '../../../assets/icons';
import TextCustom from '../../../components/textCustom';
import {ThemeApp} from '../../../styles/ThemeApp';

interface HeaderSwitchMonthProps {}
const listMonth = [''];
const HeaderSwitchMonth = (props: HeaderSwitchMonthProps) => {
  const [countPrevMonth, setCountPrevMonth] = React.useState(0);

  const subMonth = () => {
    setCountPrevMonth(prevState => prevState + 1);
  };

  const addMonth = () => {
    setCountPrevMonth(prevState => prevState - 1);
  };
  const monthShow = moment().subtract(countPrevMonth, 'month');

  return (
    <View style={styles.headerContent}>
      <TouchableOpacity
        style={[styles.viewBtn, styles.leftButton]}
        hitSlop={{top: 12, bottom: 12, left: 12, right: 15}}
        onPress={subMonth}>
        <IconAssets.ArrowLeft />
      </TouchableOpacity>
      <View style={styles.headerTxt}>
        <TextCustom preset="txtHeader">{monthShow.format('MMMM')}</TextCustom>
        <TextCustom preset="txtSmallLight" style={styles.yearTxt}>
          {monthShow.format('yyyy')}
        </TextCustom>
      </View>
      <TouchableOpacity
        style={[styles.viewBtn, styles.rightButton]}
        hitSlop={{top: 12, bottom: 12, left: 15, right: 12}}
        onPress={addMonth}>
        <IconAssets.ArrowRight />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSwitchMonth;

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  headerTxt: {alignItems: 'center'},
  viewBtn: {
    paddingVertical: 9,
    borderRadius: 9,
    borderColor: ThemeApp.borderLine,
    borderWidth: 1,
  },
  monthTxt: {fontSize: 20, color: '#222B45', fontWeight: '500'},
  yearTxt: {fontWeight: '500'},
  rightButton: {paddingLeft: 13, paddingRight: 11},
  leftButton: {paddingRight: 13, paddingLeft: 11},
});
