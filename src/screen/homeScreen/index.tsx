import {IconAssets} from 'assets/icons';
import {FORMAT_MONTH_TIME} from 'common/constant';
import ActionSheet from 'components/actionSheet';
import ButtonAdd from 'components/buttonAdd';
import TextCustom from 'components/textCustom';
import moment from 'moment';
import * as React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {useSelector} from 'react-redux';
import {eventsSelector} from 'store/application/appSelector';
import {ThemeApp} from 'styles/ThemeApp';
import EventItem from './components/eventItem';
import FormAddEvent from './components/FormAddEvents';
import {getEventInMonth} from './services';

const HomeScreen = () => {
  const actionRef = React.useRef<Modalize>();
  const handlePressAdd = () => {
    actionRef.current?.open();
  };
  const eventData = useSelector(eventsSelector);

  const [countPrevMonth, setCountPrevMonth] = React.useState(0);

  const monthShow = moment().add(countPrevMonth, 'month');

  const subMonth = () => {
    setCountPrevMonth(prevState => prevState - 1);
  };

  const addMonth = () => {
    setCountPrevMonth(prevState => prevState + 1);
  };

  const renderItem = ({item}: {item: IEventItem}) => {
    return <EventItem infor={item} />;
  };

  const keyExtractor = (item: IEventItem) => 'EVENT' + item.id;
  const data = getEventInMonth(
    eventData,
    moment(monthShow).format(FORMAT_MONTH_TIME),
  );
  return (
    <View style={styles.container}>
      {/* --------HEADER-------- */}
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
      {/* --------END HEADER-------- */}
      <FlatList
        data={data?.eventsList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.containerFlatList}
        ListEmptyComponent={
          <TextCustom preset="txtSmallLight" style={styles.emptyTxt}>
            No data in this month
          </TextCustom>
        }
      />
      <ButtonAdd onPress={handlePressAdd} />
      <ActionSheet
        ref={actionRef}
        title={'Add New Event'}
        contentComponent={
          <FormAddEvent onCloseBtn={() => actionRef.current?.close()} />
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ThemeApp.paddingHorizontalScreen,
    flex: 1,
  },
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
  emptyTxt: {
    textAlign: 'center',
    marginVertical: 50,
    fontSize: 16,
    fontStyle: 'italic',
  },
  containerFlatList: {paddingBottom: 50},
});
