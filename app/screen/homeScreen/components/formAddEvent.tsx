import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Switch,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IconAssets} from '../../../assets/icons';
import {EVENT_TYPE} from '../../../common/constant';
import CalendarPicker from '../../../components/calendarPicker';
import TextCustom from '../../../components/textCustom';
import {TextInputCustom} from '../../../components/textInputCustom';
import CategoryEventList from './categoryEventList';

interface FormAddEventProps {}
interface EventProps {
  name: string;
  note?: string;
  date?: string;
  start?: string;
  end?: string;
  isRemind?: boolean;
  categoryEvent?: EVENT_TYPE;
}

const FormAddEvent = (props: FormAddEventProps) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const eventData = React.useRef<EventProps>({name: ''});

  const handlePickCategoryEvent = (eventType: EVENT_TYPE) => {
    eventData.current.categoryEvent = eventType;
  };
  return (
    <View style={styles.container}>
      <TextInputCustom placeholder="Event Name*" />
      <TextInputCustom
        placeholder="Type the note here"
        multiline={true}
        style={styles.noteInput}
      />
      <CalendarPicker placeholder="Date" />
      <View style={styles.timeView}>
        <TextInputCustom
          placeholder="Start"
          rightChildren={<IconAssets.Clock />}
          style={{flex: 1}}
        />
        <View style={{width: 15}}></View>
        <TextInputCustom
          placeholder="End time"
          rightChildren={<IconAssets.Clock />}
          style={{flex: 1}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <TextCustom style={{fontWeight: '300'}}>Reminds me</TextCustom>
        <Switch
          trackColor={{false: '#CED3DE', true: '#0276FD'}}
          thumbColor={isEnabled ? '#003F87' : '#f4f3f4'}
          ios_backgroundColor="#CED3DE"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <TextCustom style={styles.txtCategory}>Select Category</TextCustom>
      <CategoryEventList onPickEvent={handlePickCategoryEvent} />
      <TouchableOpacity style={styles.createBtn}>
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
  txtCategory: {fontWeight: '400'},
  txtBtn: {color: '#fff', fontWeight: '700', fontSize: 16},
  timeView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  noteInput: {marginVertical: 10},
});
