import React from 'react';
import {Provider} from 'mobx-react';
import {StoreToDo} from './src/stores/noteStore';
import {Store} from './src/stores/emailPasswordStore';

import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';

const App = () => {
  const stores = {StoreToDo, Store};
  return (
    <Provider {...stores}>
      <NavigationContainer>
        {/* <Navigate/> */}
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
