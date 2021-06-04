//Bathan, Timothy
//Domiños, Jamyca
//Luzon, Raniel
//Salamat, Jorsy

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => ( 
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: '50',
    paddingVertical: '9',

  }
});

export default App;