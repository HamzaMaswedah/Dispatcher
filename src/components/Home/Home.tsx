

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Homescreen/homescreen';
import ProfileStack from './ProfileStack';
import SavedScreen from "./saved";
import HomeStack from './Homescreen/Homestack';

import {
    View,
    Image,
} from 'react-native';


const Tab = createBottomTabNavigator();


const HomePage = () => {
    return (


        <Tab.Navigator initialRouteName='Home'

            backBehavior='none'
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#262146',
                    height: 65,
                },

                headerShown: false,
                

            })}
        >

            <Tab.Screen name={"Settings"} component={ProfileStack} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                source={focused ? require("../../Myimages/ProfileWIcon.png"):require("../../Myimages/ProfileIcon.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            /> 
                        </View>
                    );
                },
            }} />

            <Tab.Screen name={"Home"} component={HomeStack} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                source={focused ? require("../../Myimages/homeWicon.png"):require("../../Myimages/HomeIcon.png")}
                                resizeMode='contain'
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                },
            }} />
            <Tab.Screen name={"Saved"} component={SavedScreen} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                source={focused ? require("../../Myimages/FavWicon.png"):require("../../Myimages/SavedIcon.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                },
            }} />

        
        </Tab.Navigator>

    )
}

export default HomePage;