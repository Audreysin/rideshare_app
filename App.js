import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Header from './component/header';
import Login from './component/login';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Rideshare"/>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default App;