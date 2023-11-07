/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './src/screen/Home';
import {store} from './src/redux/store'
import { Provider } from 'react-redux';
const App =()=> {
  return (
    <Provider  store ={store}>
   <Home />
   </Provider>
  );
}

export default App;
