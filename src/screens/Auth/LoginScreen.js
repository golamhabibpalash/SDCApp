// src/screens/Auth/LoginScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import appLogo from '../../../src/assets/images/sdcLogo.png'
import { colors } from '../../styles';
import appConfig from '../../../app.json';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setlogin] = useState('');
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <Image source={appLogo} style={styles.logo} />
            <Text style={styles.title}>{appConfig.fullName}</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email/Username"
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor={'#000'}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor={'#000'}

                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.forgotPasswordTextContainer}>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forget
                        Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
        marginTop: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        color: colors.primary,
    },
    inputContainer: {
        width: '85%',
        backgroundColor: '#EAEAEA',
        padding: 20,
        borderRadius: 10
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: '#000',
        marginTop: 5,
    },
    loginButton: {
        backgroundColor: colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    forgotPasswordTextContainer: {
        width: '70%',
        padding: 20,
        backgroundColor: '#F8F8F8',
        alignItems: 'center'

    },
    forgotPasswordText: {
        color: '#666',
    },
});

export default LoginScreen;