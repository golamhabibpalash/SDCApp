import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import appConfig from '../../../app.json';
import imagelink from '../../assets/images/sdcLogo.png'
const HeaderPortion = () => {

    const fullName = appConfig.fullName;
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <Image source={imagelink} style={styles.logoStyle} />
                <Text style={styles.text}>{fullName}</Text>

            </View>
            <Entypo name="user" size={30} color="#000" />
            <FontAwesome name="home" size={30} color="black" />
            <Feather name="user" size={30} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#E3E9D7'
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoStyle: {
        width: 50,
        height: 50,
        alignItems: 'center'
    },
    icon: {
        marginHorizontal: 5,
    },
    text: {
        fontSize: 20,
        color: 'green',
        paddingLeft: 5
    },
});
export default HeaderPortion;