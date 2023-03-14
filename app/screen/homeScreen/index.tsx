import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Modalize} from 'react-native-modalize';
import ActionSheet from '../../components/actionSheet';
import ButtonAdd from '../../components/buttonAdd';
import TextCustom from '../../components/textCustom';
import {ThemeApp} from '../../styles/ThemeApp';
import EventItem from './components/eventItem';
import FormAddEvent from './components/formAddEvent';
import HeaderSwitchMonth from './components/HeaderSwitchMonth';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const actionRef = React.useRef<Modalize>();
  const handlePressAdd = () => {
    actionRef.current?.open();
  };

  return (
    <View style={styles.container}>
      <HeaderSwitchMonth />
      <EventItem />
      <ButtonAdd onPress={handlePressAdd} />
      <ActionSheet
        ref={actionRef}
        title={'Add New Event'}
        contentComponent={<FormAddEvent />}
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
});
