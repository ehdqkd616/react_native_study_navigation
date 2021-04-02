/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import
{
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

class Hook extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: '연우'
        }
    }

    changeName = () =>
    {
        this.setState({
            name: 'Rudy'
        });
    }

    render()
    {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>안녕하세요 Hook 테스트입니다.</Text>
                <Button title={'이름변경'} onPress={() => this.changeName()}></Button>
                <Text>안녕하세요 {this.state.name} 님.</Text>
            </View >
        );
    }
}

// const Hook = () =>
// {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>안녕하세요 Hook 테스트입니다.</Text>
//             <Text>안녕하세요 Rudy 님.</Text>
//         </View >
//     );
// };


const styles = StyleSheet.create({

});

export default Hook;
