import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createStackContainer} from '@react-navigation/stack';
import Routes from './routes';

const Stack = createStackContainer();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.NAvigator>
                <Stack.Screen name="Login" component={Routes}/>
            </Stack.NAvigator>
        </NavigationContainer>
    );
}