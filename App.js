import React from "react";
import AppHeader from './AppHeader'
import { StyleSheet, Text, View } from "react-native";
import ScanScreen from './ScanQR'

export default class App extends React.Component 
{
  render() 
  {
    return(
      <View>
        <AppHeader/>
        <ScanScreen/>
      </View>
    )
  }
}
