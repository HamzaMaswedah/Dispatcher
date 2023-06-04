/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import rootReducer from './src/store/store'
import SignUpScreen from './src/components/signup';
import LoginScreen from './src/components/login';
import SplashScreen from 'react-native-splash-screen';
import HomePage from './src/components/Home/Home';
// import MyCrousel from './src/components/coursel';

import HomeStack from './src/components/Home/Homescreen/Homestack';

// import Icon from 'react-native-ionicons';
// import icon from 'react-native-vector-icons/Ionicons';



import {
  Text,
  View,
  Image,

} from 'react-native';



const Stack = createNativeStackNavigator();


const MyApp = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={rootReducer}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomePage' screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name={"HomeTmp"} component={Homes} />
          <Stack.Screen name={"signup"} component={SignUpScreen} />
          {/* <Stack.Screen name={"onboarding"} component={MyCrousel} /> */}
          <Stack.Screen name={"login"} component={LoginScreen} />
          <Stack.Screen name={"HomePage"} component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}




const Homes = () => {

  const navig = useNavigation();

  setTimeout(() => navig.navigate('signup'), 1500);

  return (
    <View
      >
      <Image source={require('./Myimages/tmp.png')}  />
      <Text >Dispatcher</Text>
    </View>
  );
}


// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   backGround:
//   {
//     position: 'absolute',
//     width: 450,
//     height: 700,
//     left: 0,
//     top: 0,
//     backgroundColor: '#262146',
//   },

//   icon: {
//     position: 'absolute',
//     height: 150,
//     width: 150,
//     left: '30%',
//     right: '22.14%',
//     top: '15%',
//     bottom: '0%',
//   },

//   dispatcher: {
//     position: 'absolute',
//     height: 200,
//     width: 200,
//     left: '22.01%',
//     right: '22.14%',
//     top: '75%',
//     bottom: '0%',
//     fontWeight: '700',
//     fontSize: 40,
//     color: '#FFFFFF',
//   },

//   upperBack:
//   {
//     position: 'absolute',
//     height: 220,
//     width: 450,
//     backgroundColor: '#262146',
//   },

//   lowerBack:
//   {
//     flex: 1,
//     flexDirection: 'column',

//     padding: 20,
//     paddingTop: 4,
//     gap: 24,

//     position: 'absolute',
//     width: 450,
//     height: 500,
//     left: 0,
//     top: 222,
//     backgroundColor: '#F8F8FF',

//   },

//   SignUpBox:
//   {
//     flexDirection: "row",
//     paddingTop: 0,
//     paddingBottom: 0,
//     paddingLeft: 12,
//     paddingRight: 16,

//     width: 370,
//     height: 50,

//     backgroundColor: "#FFFFFF",
//     borderRadius: 8,


//   },

//   TextSignUp:
//   {

//     fontWeight: 'bold',
//     fontSize: 30,
//     color: "#5A5A89",
//   },

//   line: {

//     borderBottomColor: 'black',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     width: 370,
//   },

//   SignUpFillBox:
//   {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 0,
//     paddingBottom: 0,
//     paddingLeft: 12,
//     paddingRight: 16,
//     width: 370,
//     height: 35,
//     backgroundColor: "#0058B9",
//     borderRadius: 8,


//   },

//   textBox:
//   {
//     width: 370,
//     height: 35,
//     fontSize: 15,
//     paddingLeft: 150,
//     paddingTop: 5,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },

//   loadingBox:
//   {
//     marginTop: 100,
//     width: 200,
//     height: 150,
//     fontSize: 15,
//     paddingLeft: 150,
//     paddingTop: 5,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },

//   profileBox: {
//     position: 'absolute',
//     width: 450,
//     height: 80,
//     backgroundColor: '#FFFFFF',
//     shadowOffset: { width: -2, height: 2 },
//     shadowColor: '#171717',
//     shadowOpacity: 0.2,


//   },

//   HiHamza: {
//     // position: 'absolute',  
//     width: 343,
//     height: 32,
//     left: 25,
//     top: 15,

//     fontWeight: '500',
//     fontSize: 24,
//     color: '#262146'


//   },

//   editmy: {
//     width: 343,
//     height: 45,
//     left: 25,
//     marginTop: 10,
//   },

//   profileImage:
//   {
//     position: 'absolute',
//     left: 320,
//     height: 50,
//     top: 15,

//   },
//   topHomeCon:
//   {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // padding:0 ,16,

//     position: 'absolute',

//     width: 420,
//     height: 90,
//     backgroundColor: '#262146'
//   },

//   filterbar:
//   {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // padding:0 ,16,

//     position: 'absolute',

//     width: 420,
//     height: 50,
//     top: 90,
//     backgroundColor: '#FFFFFF'
//   },
//   goToSite:
//   {
//     width: 311,
//     height: 50,
//     backgroundColor: '#0058B9',
//     borderRadius: 30,
//     left: 25,
//     bottom: 10,
//     alignItems: 'center',
//     paddingTop: 15,
//   },
//   textProfTab:
//   {
//     marginLeft: 5,
//     fontFamily: 'Roboto',
//     fontWeight: '400',
//     fontSize: 15,
//     color: '#262146'
//   }

// });

export default MyApp;