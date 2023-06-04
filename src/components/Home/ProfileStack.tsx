import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './homescreen';
// import Fullart from './fullarticle';
import MainProfileScreen from '../Home/Profile/profile'

const Stack = createNativeStackNavigator();


const ProfileStack = () => {


  
    return (
        
          <Stack.Navigator initialRouteName='MainProfile' screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name={"MainProfile"} component={MainProfileScreen} />
          </Stack.Navigator>
    );
  
  }


  export default ProfileStack ;
    
  