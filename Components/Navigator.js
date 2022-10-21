import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro } from "../Screens/Intro";
import { HomeScreen } from "../Screens/HomeScreen";
import { Result } from "../Screens/Result";

const Stack = createNativeStackNavigator();

export function AuthNaviator(){
    return(
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false}}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Result" component={Result}/>
        </Stack.Navigator>
    );
}