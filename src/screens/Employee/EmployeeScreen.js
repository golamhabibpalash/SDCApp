import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderPortion from '../../components/common/HeaderPortion'
import { typography } from '../../styles'

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
            <Text style={styles.cell}>{item.id}</Text>
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.designation}</Text>
            <Text style={styles.cell}>{item.phone}</Text>
            <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Edit</Text>
            </TouchableOpacity>
        </View>
    );
    // Render function for header
    const renderHeader = () => (
        <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.headerCell, { width: '5%' }]}>#</Text>
            <Text style={[styles.headerCell, { width: '10%' }]}>Photo</Text>
            <Text style={styles.headerCell}>Employee Name</Text>
            <Text style={styles.headerCell}>Designation</Text>
            <Text style={styles.headerCell}>Phone</Text>
            <Text style={styles.headerCell}>Action</Text>
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
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerRow: {
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        color: '#000',
        borderLeftWidth: 1,
        borderColor: '#ddd',
    },
    headerCell: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 8,
        color: '#000'
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    actionButton: {
        backgroundColor: '#3498db',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 5,
    },
    actionText: {
        color: '#fff',
    },

})