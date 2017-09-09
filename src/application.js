import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default function Application() {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Text>Hello there</Text>
            </View>
        </Provider>    
    );
}

