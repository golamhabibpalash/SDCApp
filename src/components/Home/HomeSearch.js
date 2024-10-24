
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component, useState } from 'react'
import { colors } from '../../styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const HomeSearch = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setText(value)}
                    value={text}
                    placeholder="search text"
                    placeholderTextColor="#fff"
                />
                <FontAwesome
                    name="search" // Replace with the desired icon name.
                    size={20}
                    color="#fff"
                    style={styles.icon}
                />
            </View>
        </View>
    )
}

export default HomeSearch


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.primary,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.primary,
        height: 45
    },
    input: {
        flex: 9, // 90% of the width.
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: colors.primary,
        color: '#fff'
    },
    icon: {
        flex: 1, // 10% of the width.
        textAlign: 'center',

    },
})