import {View, Text, SafeAreaView} from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';

const Home = () => {
    return (
        <SafeAreaView>
        <Stack.Screen
        options={{headerTitle:"Home1234"}}
        />
        <View>
            <Text>Homelskdahf;l</Text>
        </View>
        </SafeAreaView>
    );
}

export default Home;