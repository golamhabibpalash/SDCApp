import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { typography } from '../../styles'

const HomeButton = ({ iconLibrary, iconName, buttonName, tapPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={tapPress}>
            <View style={styles.buttonContent}>
                <Feather name={iconName} color={'#000'} size={40} />
                <Text style={[typography.homeButtonText, styles.buttonText]}>{buttonName}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default HomeButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 6,
        shadowOpacity: 0.5,
        width: 90,
        height: 90,
        margin: 5
    },
    buttonContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#000',
        elevation: 5,
    }

})