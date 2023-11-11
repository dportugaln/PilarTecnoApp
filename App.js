
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './src/components/Drawer';
import { Provider } from 'react-redux';
import store from './src/redux/Store';




const App = () => {


  return (
    <Provider store={store} >
      <NavigationContainer>
        <CustomDrawer />
      </NavigationContainer>
    </Provider>
  );
}



export default App;