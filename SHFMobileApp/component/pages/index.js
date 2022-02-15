import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { styles } from '../../styles/style';

export function Index() {

    const show = () => {
        Toast.show({
            text1: 'Success',
            text2: 'You have successfully showed toast alert',
            autoHide: true,
            position: 'top',
            visibilityTime: 2000,
            type: 'success',
            onShow: () => {
            }
        })
    }
    return (
        <View style={styles.container}>
            {/* <Button title='Show' onPress={show} color='coral' /> */}
            <View>
                <Text style={styles.header}>Shared Harvest Network</Text>
                <Text style={styles.paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
            </View>
            <View style={styles.card1}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.participantImg}
                        source={require('../../assets/hand-up.png')}
                    />
                </View>
                <Text style={styles.header}>Participant</Text>
                <Text style={styles.paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                <View style={styles.marginTop20}>
                    <Button title='Registration' onPress={show} />
                </View>
            </View>
            <View style={styles.card}>

            </View>
        </View >
    )
}