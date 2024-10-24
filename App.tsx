import React from 'react';
import {enableScreens} from 'react-native-screens';
enableScreens();

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import HomeScreen from './src/screens/Home/HomeScreen';

const myStyles = StyleSheet.create({
  tiniLogo: {
    width: 80,
    height: 80,
  },
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView >
      <StatusBar backgroundColor={'red'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={{ paddingTop: StatusBar.currentHeight }}>
        {/* <LoginScreen /> */}
        <HomeScreen />
      </View>
    </SafeAreaView>


    
  );
}



export default App;
