import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro } from "../Screens/Intro";
import { HomeScreen } from "../Screens/HomeScreen";

const Stack = createNativeStackNavigator();

export function AuthNaviator(){
    return(
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false}}/>
        </Stack.Navigator>
    );
}