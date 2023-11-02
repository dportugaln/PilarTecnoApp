/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';





const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView style={{}}>
      <StatusBar
        barStyle={'light-content'}
      />
      <ScrollView>
     
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
