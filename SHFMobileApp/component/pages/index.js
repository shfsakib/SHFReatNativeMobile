import React from 'react';
import { Button, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

export function Index() {

    const show = () => {
        Toast.show({
            text1: 'Success',
            text2: 'You have successfully showed toast alert',
            autoHide: true,
            position: 'bottom',
            visibilityTime: 2000,
            type: 'success',
            onShow: () => {
            }
        })
    }
    return (
        <View>
            <Button title='Show' onPress={show} color='coral' />
        </View >
    )
}