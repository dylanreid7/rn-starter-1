import React from 'react';
import { Text, Stylesheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Dylan';
    return (
        <View>
            <Text style={{ styles.textStyle }}>Welcome to React Native</Text>
            <Text>My name is {name}</Text>
        </View>
    );
}

const styles = Stylesheet.create({
    textStyle: {
        fontSize: 45,
    }, 
    subHeaderStyle: {
        fontSize: 20
    }
});