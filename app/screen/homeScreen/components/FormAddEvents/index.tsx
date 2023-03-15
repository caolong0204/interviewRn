import moment from 'moment';
import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {EVENT_TYPE} from '../../../../common/constant';
import CalendarPicker from '../../../../components/calendarPicker';
import TextCustom from '../../../../components/textCustom';
import {TextInputCustom} from '../../../../components/textInputCustom';
import TextInputTime from '../../../../components/TextInputTime';
import {FIELD_NAME, homeService} from '../../services';
import CategoryEventPicker from './categoryEventList';
import RemindToggle from './remindToggle';

interface FormAddEventProps {
  onCloseBtn: () => void;
}

const FormAddEvent = ({onCloseBtn}: FormAddEventProps) => {
  const [errorMsg, createEvent, changeContent] = homeService.useCreateEvent(
    () => {
      onCloseBtn();
    },
  );
  return (
    <View style={styles.container}>
      <TextInputCustom
        placeholder="Event Name"
        errorMsg={errorMsg.errorName}
        isRequired={true}
        onChangeText={(value: string) => {
          changeContent(FIELD_NAME.NAME, value);
        }}
      />
      <TextInputCustom
        placeholder="Type the note here"
        multiline={true}
        style={styles.noteInput}
        onChangeText={(value: string) => {
          changeContent(FIELD_NAME.NOTE, value);
        }}
      />
      <CalendarPicker
        placeholder="Date"
        onPickDate={(value: number) => {
          changeContent(FIELD_NAME.DATE, value);
        }}
      />
      <View style={styles.timeView}>
        <TextInputTime
          placeHolder="Start Time"
          onChangeText={(value: string) => {
            changeContent(FIELD_NAME.STATE_TIME, value);
          }}
          errorMsg={errorMsg.errorStartTime}
        />
        <View style={{width: 15}}></View>
        <TextInputTime
          placeHolder="End Time"
          onChangeText={(value: string) => {
            changeContent(FIELD_NAME.END_TIME, value);
          }}
          errorMsg={errorMsg.errorEndTime}
        />
      </View>
      <RemindToggle
        onSwitch={(value: boolean) => {
          changeContent(FIELD_NAME.REMIND, value);
        }}
      />
      <CategoryEventPicker
        onPickEvent={(value: EVENT_TYPE) => {
          changeContent(FIELD_NAME.CATEGORY, value);
        }}
        errorMsg={errorMsg.errorCategory}
        isRequired={true}
      />
      <TouchableOpacity style={styles.createBtn} onPress={createEvent}>
        <TextCustom style={styles.txtBtn}>Create Event</TextCustom>
      </TouchableOpacity>
    </View>
  );
};

export default FormAddEvent;

const styles = StyleSheet.create({
  container: {paddingBottom: 20},
  createBtn: {
    backgroundColor: '#735BF2',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  txtBtn: {color: '#fff', fontWeight: '700', fontSize: 16},
  timeView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  noteInput: {marginVertical: 10},
  remindField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
