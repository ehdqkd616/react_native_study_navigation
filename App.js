/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Hook from './Components/Hook'

const Stack = createStackNavigator();

import
{
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

function HomeScreen({ navigation })
{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>안녕하세요 네비게이션 테스터입니다.</Text>
            <Button title="프로필 페이지로 이동" onPress={() => navigation.navigate('Profile', {
                // itemId: 86,
                otherParam: 'anything you want here',
            })} />
            <Button title="Hook 을 이용하는 방법" onPress={() => navigation.navigate('Hook')} />
        </View >
    )
}

function ProfileScreen({ route, navigation })
{

    const { itemId } = route.params;
    const { otherParam } = route.params; // const otherParam = route.params.otherParam;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>안녕하세요 ProfileScreen 테스터입니다.</Text>

            <Text>itemId: {itemId}</Text>
            <Text>otherParam: {otherParam}</Text>

            <Button title="버튼 페이지로 이동" onPress={() => navigation.navigate('Button')} />
        </View >
    )
}

function ButtonScreen({ navigation })
{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>안녕하세요 ButtonScreen 테스터입니다.</Text>
            <Button title="버튼 페이지로 이동" onPress={() => navigation.push('Button')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title="popToTop" onPress={() => navigation.popToTop()} />
        </View >
    )
}


const App = () =>
{
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text>안녕하세요 네비게이션 테스트입니다.</Text>
        // </View >
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
                <Stack.Screen name="Profile" initialParams={{ itemId: 10000 }} component={ProfileScreen} />
                <Stack.Screen name="Button" component={ButtonScreen} />
                <Stack.Screen name="Hook" initialParams={{ itemId: 10000 }} component={Hook} />
                {/* Rest of your app code */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({

});

export default App;
