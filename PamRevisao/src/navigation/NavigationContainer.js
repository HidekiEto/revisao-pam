import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InitialScreen from "../pages/InitialScreen";
import Login from "../pages/Login";

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name = "InitialScreen"
                component = { InitialScreen }
                options = {{ headerShown: false}}
                
            />

            <Stack.Screen
                name="Login"
                component={ Login }
                options={{ headerShown: false }}
                
            />

        </Stack.Navigator>
    );
}