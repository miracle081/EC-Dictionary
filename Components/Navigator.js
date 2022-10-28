import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro } from "../Screens/Intro";
import { HomeScreen } from "../Screens/HomeScreen";
import { Result } from "../Screens/Result";
import { History } from "../Screens/Histroy";
import { Help } from "../Screens/help";

const Stack = createNativeStackNavigator();

export function AuthNaviator(){
    return(
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false}}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Result" component={Result}/>
            <Stack.Screen name="History" component={History}/>
            <Stack.Screen name="Help" component={Help}/>
        </Stack.Navigator>
    );
}