import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function app(){
    return (
        <NavigationContainer>
            <View>
                <Text>Hello</Text>
            </View>
        </NavigationContainer>
    );
}