import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from '../screens/Auth/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';

import { AuthContext } from "../contexts/AuthContext/AuthContext";

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { user } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    //If user is logged in, show the main screens
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </>
                ) : (
                    //otherwise show the login screen
                    <Stack.Screen name="Login" component={LoginScreen} options={{
                        headerShown: false
                    }} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator;