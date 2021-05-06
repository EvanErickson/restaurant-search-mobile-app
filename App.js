import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

console.log(StatusBar.currentHeight)
export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <View  style={{backgroundColor: 'green', padding: 20, flexDirection: 'row'}}>
          <Text>Search</Text>
        </View>
        <View style={{backgroundColor: 'blue', padding: 20, flex: 1}}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});
