import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderPortion from '../../components/common/HeaderPortion'
import { colors, typography } from '../../styles'
import Feather from 'react-native-vector-icons/Feather'

const EmployeeScreen = () => {
    const employeeData = [
        {
            id: '1',
            photo: 'https://via.placeholder.com/50',
            name: 'John Doe',
            designation: 'Software Engineer',
            phone: '123-456-7890',
        },
        {
            id: '2',
            photo: 'https://via.placeholder.com/50',
            name: 'Jane Smith',
            designation: 'Product Manager',
            phone: '987-654-3210',
        },
        {
            id: '3',
            photo: 'https://via.placeholder.com/50',
            name: 'Mike Johnson',
            designation: 'Designer',
            phone: '456-789-0123',
        },
        {
            id: '4',
            photo: 'https://via.placeholder.com/50',
            name: 'Emma Brown',
            designation: 'HR Manager',
            phone: '321-654-9870',
        },
    ];
    // Render function for each row
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={[styles.cell, styles.indexCol]}>{item.id}</Text>
            <Text style={[styles.photoCol]}>

                <Image source={{ uri: item.photo }} style={[styles.photo]} />

            </Text>
            <Text style={[styles.cell, styles.nameCol]}>{item.name}</Text>
            <Text style={[styles.cell, styles.designationCol]}>{item.designation}</Text>
            <Text style={[styles.cell, styles.phoneCol]}>{item.phone}</Text>
            <TouchableOpacity style={[styles.actionButton]}>
                <Text style={[styles.actionText,]}>
                    <Feather name='eye' style={styles.actionIcon} />
                    <Feather name='edit' style={styles.actionIcon} />
                </Text>
            </TouchableOpacity>
        </View>
    );
    // Render function for header
    const renderHeader = () => (
        <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.headerCell, styles.indexCol]}>#</Text>
            <Text style={[styles.headerCell, styles.photoCol]}>Photo</Text>
            <Text style={[styles.headerCell, styles.nameCol]}>Employee Name</Text>
            <Text style={[styles.headerCell, styles.designationCol]}>Designation</Text>
            <Text style={[styles.headerCell, styles.phoneCol]}>Phone</Text>
            <Text style={[styles.headerCell, styles.actionCol]}>Action</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <HeaderPortion />
            <View style={styles.titleArea}>
                <Text style={[styles.titleText, typography.titleText]}>Employee List</Text>
            </View>
            <View>
                {renderHeader()}
                <FlatList
                    data={employeeData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default EmployeeScreen

const styles = StyleSheet.create({
    container: {
        height: 500,
    },
    titleArea: {
        backgroundColor: '#DFDFDF',
        alignItems: 'center',
        padding: 10
    },
    titleText: {
        color: '#000',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#000',
    },
    headerRow: {
        backgroundColor: colors.primary,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    cell: {
        textAlign: 'center',
        color: '#000',
        borderRightWidth: 0.5,
        borderRightColor: '#000',
        padding: 5
    },
    headerCell: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        borderRightWidth: 0.5,
        borderRightColor: '#000'
    },
    photo: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    actionButton: {
        borderRadius: 5,
    },
    actionText: {
        color: colors.primary,
    },
    actionIcon: {
        paddingHorizontal: 5
    },
    indexCol: {
        width: '5%'
    },
    photoCol: {
        width: '10%'
    },
    nameCol: {
        width: '30%',
        textAlign: 'left'
    },
    designationCol: {
        width: '25%'
    },
    phoneCol: {
        width: '20%'
    },
    actionCol: {
        width: '10%'
    }

})