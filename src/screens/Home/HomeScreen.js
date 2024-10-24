import { StatusBar, Text, View } from "react-native";
import HeaderPortion from "../../components/common/HeaderPortion";
import HomeSearch from "../../components/Home/HomeSearch";
import HomeButtons from "../../components/Home/HomeButtons";


const HomeScreen = () => {

    return (
        <View>
            <HeaderPortion />
            <HomeSearch />
            <HomeButtons />
        </View>
    )
}

export default HomeScreen;