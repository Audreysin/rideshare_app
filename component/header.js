import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header} >
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header : {
    height:100,
    padding:15,
    backgroundColor:'blue'
  },
  text:{
    color:'#fff',
    fontSize:23,
    textAlign:'center',
    paddingTop:30
  },
});

export default Header;