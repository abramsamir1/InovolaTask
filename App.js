import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import MainScreen from './src/screens/MainScreen';

export default class App extends Component {
 
  constructor() {
    super();
    console.disableYellowBox =  true;
    }

    
    render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      return (
        <Provider store={store}>
          <MainScreen />
        </Provider>
      );
    }
  }
  
