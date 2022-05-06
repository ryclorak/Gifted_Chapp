import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const openRegisterScreen = () => {
        navigation.navigate('Register'); // TODO: broken
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder = 'How about some email?'
                label = 'Email'
//                leftIcon = {{ type: 'fontAwesome', name: 'email' }} // TODO: broken
                value = {email}
                onChangeText = {text => setEmail(text)}
            />
            <Input
                placeholder = 'Gimme a password'
                label = 'Password'
//                leftIcon = {{ type: 'material', name: 'lock' }} // TODO: broken
                value = {password}
                onChangeText = {text => setPassword(text)}
                secureTextEntry
            />
            <Button title='sign in' style={styles.button} />
            <Button title='register' style={styles.button} onPress={openRegisterScreen} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginTop: 100,
    },
    button: {
        width: 370,
        marginTop: 10
    }
});

export default Login;
