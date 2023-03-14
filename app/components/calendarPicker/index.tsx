import moment from 'moment';
import * as React from 'react';
import {Keyboard, Text} from 'react-native';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {IconAssets} from '../../assets/icons';
import {ThemeApp} from '../../styles/ThemeApp';
import ErrorLabel from '../errorLabel';
type CalendarPickerProps = {
  placeholder?: string;
  rightChildren?: React.ReactNode;
  styleContainer?: ViewStyle;
  styleText?: TextStyle;
  onPickDate?: Function;
  minDate?: string;
  maxDate?: string;
  styleErrorContainer?: ViewStyle;
  styleErrorText?: TextStyle;
  errorMsg?: string;
  defaultDate?: Date;
};

const CalendarPicker = ({
  styleContainer,
  styleText,
  onPickDate,
  placeholder = 'Date',
  minDate,
  maxDate,
  styleErrorContainer,
  styleErrorText,
  defaultDate = new Date(),
  errorMsg = '',
}: CalendarPickerProps) => {
  const [selectDate, setSelectDate] = React.useState<Date>();
  const modalizeRef = React.useRef<any>();
  const value = selectDate
    ? moment(selectDate).format('DD/MM/YYYY')
    : placeholder;
  
  //setup min/max Date able to choice
  const min = minDate || moment().subtract(365, 'days').format('YYYY-MM-DD');
  const max = maxDate || moment().add(365, 'days').format('YYYY-MM-DD');

  /**
   * hanle pick a day in calendar
   * @param dayTimeStamp day was picked
   */
  const handlePickDate = (dayTimeStamp: any) => {
    setSelectDate(dayTimeStamp);
    onPickDate && onPickDate(dayTimeStamp);
    modalizeRef.current?.close();
  };

  /**
   * handle open modal calendar
   */
  const handleOpenDatePicker = () => {
    Keyboard.dismiss();
    modalizeRef.current.open();
  };
  return (
    <>
      <TouchableOpacity
        style={[styles.container, styleContainer]}
        onPress={handleOpenDatePicker}>
        <Text
          style={[styles.input, !selectDate && styles.placeHolder, styleText]}>
          {value}
        </Text>

        <IconAssets.Calendar />
      </TouchableOpacity>
      <ErrorLabel
        errorMsg={errorMsg}
        textStyle={styleErrorText}
        style={styleErrorContainer}
      />
      <Portal>
        <Modalize
          modalStyle={styles.calendarModal}
          adjustToContentHeight={true}
          childrenStyle={{minHeight: 350}}
          ref={modalizeRef}>
          <Calendar
            style={styles.calendar}
            minDate={min}
            maxDate={max}
            markedDates={{
              [moment(selectDate || defaultDate).format('YYYY-MM-DD')]: {
                selected: true,
                selectedColor: 'blue',
              },
            }}
            initialDate={
              selectDate
                ? moment(selectDate).format('YYYY-MM-DD')
                : moment(defaultDate).format('YYYY-MM-DD')
            }
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day: any) => {
              handlePickDate(day.timestamp);
            }}
            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
              todayTextColor: 'red',
            }}
          />
        </Modalize>
      </Portal>
    </>
  );
};

export default CalendarPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: 10,
    borderColor: ThemeApp.borderLine,
    paddingVertical: 2,
  },
  input: {
    flex: 1,
    padding: 10,
    borderBottomColor: 'transparent',
    fontSize: 14,
  },
  placeHolder: {
    color: ThemeApp.grayTxt,
  },
  calendarModal: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  calendar: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    overflow: 'hidden',
  },
});
