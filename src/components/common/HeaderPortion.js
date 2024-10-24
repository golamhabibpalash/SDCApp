import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import appConfig from '../../../app.json';
import imagelink from '../../assets/images/sdcLogo.png'
import { colors } from '../../styles/colors';
import Feather from 'react-native-vector-icons/Feather';
const HeaderPortion = () => {

    const fullName = appConfig.fullName;
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <Image source={imagelink} style={styles.logoStyle} />
                <Text style={styles.text}>{fullName}</Text>

            </View>
            <View style={styles.iconWrapper}>
                <Feather name="user" size={30} color="#fff" />
            </View>
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
    iconWrapper: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 30
    }
});
export default HeaderPortion;