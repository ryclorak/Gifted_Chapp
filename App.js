import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login or whatever i dont care' component={LoginScreen} />
                <Stack.Screen name='Registration station' component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
