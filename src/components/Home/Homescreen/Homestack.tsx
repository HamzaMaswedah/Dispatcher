import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './homescreen';
import Fullart from './fullarticle';

const Stack = createNativeStackNavigator();


const HomeStack = () => {


  
    return (
        
          <Stack.Navigator initialRouteName='articles' screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name={"articles"} component={HomeScreen} />
            <Stack.Screen name={"fullart"} component={Fullart} />
          </Stack.Navigator>
    );
  
  }


  export default HomeStack;
  