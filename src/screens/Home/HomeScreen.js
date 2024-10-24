import { StatusBar, Text, View } from "react-native";
import HeaderPortion from "../../components/common/HeaderPortion";
import Entypo from 'react-native-vector-icons/Entypo';


const HomeScreen = () => {

    return (
        <View>

            <StatusBar backgroundColor={'green'}

            />
            <Entypo name="home" size={30} color="#000" />

            <HeaderPortion />
        </View>
    )
}

export default HomeScreen;