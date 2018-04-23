import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './src/components/common';

export default class App extends React.Component {
  render() {
    return (
        <View>
          <Header name="StackApp"/>
        </View>
    );
  }
}
