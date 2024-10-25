import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeButton from './HomeButton'
import { useNavigation } from '@react-navigation/native';
import EmployeeScreen from '../../screens/Employee/EmployeeScreen';

const HomeButtons = () => {
    const buttonsInfos = [
        { iconLibrary: "Feather", iconName: 'home', buttonName: 'Home' },
        { iconLibrary: "Feather", iconName: 'users', buttonName: 'Employee' },
        { iconLibrary: "Feather", iconName: 'layers', buttonName: 'Projects' },
        { iconLibrary: "Feather", iconName: 'tool', buttonName: 'Equipments' },
        { iconLibrary: "Feather", iconName: 'user-plus', buttonName: 'Clients' },
        { iconLibrary: "Feather", iconName: 'dollar-sign', buttonName: 'Expenses' },
        { iconLibrary: "Feather", iconName: 'database', buttonName: 'Daily Data' },
        { iconLibrary: "Feather", iconName: 'settings', buttonName: 'Setup' },
        { iconLibrary: "Feather", iconName: 'bell', buttonName: 'Notice' },
    ];
    const navigation = useNavigation();
    const handleButtonPress = ({ screenName }) => {
        console.log(screenName);
        navigation.navigate(screenName);
    };
    return (
        <View style={styles.buttonContainer}>
            {buttonsInfos.map((item, index) => (
                <View key={index}>
                    <HomeButton
                        iconLibrary='FontAwesome'
                        iconName={item.iconName}
                        buttonName={item.buttonName}
                        onPress={() => handleButtonPress({ screenName: item.buttonName })}
                    />
                </View>
            ))}

        </View>
    )
}

export default HomeButtons
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row', flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingTop: 10,
        height: '100%',
        backgroundColor: '#DDDDDD'
    }
});