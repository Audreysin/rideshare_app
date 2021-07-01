import React from 'react';
import { View, TextInput, Button, StyleSheet, Text} from 'react-native'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
        };
    }
    submit() {
        console.warn(this.state);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <Text style={styles.heading}>Login to your Account</Text>
                </View>
                <View style={styles.subcontainer}>
                    <TextInput 
                        placeholder='Enter Email'
                        onChangeText={ (text) => {this.setState({name:text})}}
                        style={styles.inputField} />
                    <TextInput 
                        placeholder='Enter Password'
                        onChangeText={ (text) => {this.setState({password:text})}}
                        style={styles.inputField}
                        secureTextEntry={true} />
                    <Button title='Login' onPress={() => {this.submit()}} />
                    <Button title="Create Account" onPress={()=>{}}  />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    inputField: {
        borderWidth: 2,
        borderColor: 'grey',
        margin: 20,
        padding:20
    },
    container: {
        flex: 3
    },
    subcontainer: {
        alignContent:'center',
        padding: 10,
        flex:2,
        flexDirection:'column',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 35,
        textAlign:'center',
        fontWeight:'bold',
        paddingHorizontal: 50
    }
});

export default Login;