/* ------------------------------ Basic imports ----------------------------- */
import React from 'react';
/* ------------------------------ Navigation ----------------------------- */
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/rootNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
