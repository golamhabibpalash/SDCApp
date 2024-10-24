import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeButton from './HomeButton'

const HomeButtons = () => {
    const buttonsInfos = [
        { iconLibrary: "Feather", iconName: 'home', buttonName: 'Home' },
        { iconLibrary: "Feather", iconName: 'users', buttonName: 'Employees' },
        { iconLibrary: "Feather", iconName: 'layers', buttonName: 'Projects' },
        { iconLibrary: "Feather", iconName: 'tool', buttonName: 'Equipments' },
        { iconLibrary: "Feather", iconName: 'user-plus', buttonName: 'Clients' },
        { iconLibrary: "Feather", iconName: 'dollar-sign', buttonName: 'Expenses' },
        { iconLibrary: "Feather", iconName: 'database', buttonName: 'Daily Data' },
        { iconLibrary: "Feather", iconName: 'settings', buttonName: 'Setup' },
        { iconLibrary: "Feather", iconName: 'bell', buttonName: 'Notice' },
    ];
    return (
        <View style={styles.buttonContainer}>
            {buttonsInfos.map((item, index) => (
                <View key={index}>
                    <HomeButton
                        iconLibrary='FontAwesome'
                        iconName={item.iconName}
                        buttonName={item.buttonName}
                        onPress={() => console.log('Profile button pressed!')}
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