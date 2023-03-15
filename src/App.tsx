/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import HomeScreen from '@screen/homeScreen';
import {persitStorage, rootStore} from '@store/rootStore';
function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Provider store={rootStore}>
          <PersistGate
            loading={<ActivityIndicator color={'#000'} />}
            persistor={persitStorage}>
            <Host>
              <HomeScreen />
            </Host>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
