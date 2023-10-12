/* ------------------------------ Basic imports ----------------------------- */
import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
/* ------------------------------ Navigation ----------------------------- */
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/rootNavigation';
/* ---------------------------------- REDUX --------------------------------- */
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    Platform.OS === 'android' ? StatusBar.setBackgroundColor('black') : null;
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={{
            dark: true,
            colors: {
              background: 'black',
              primary: '',
              card: '',
              text: '',
              border: '',
              notification: '',
            },
          }}>
          <RootNavigation />
          <Toast />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
