import {Stack} from "expo-router";

export default function AuthLayout() {
    return (
        <Stack
           screenOptions={{
            headerShown :false,
            //this hides the top navigation bar on the screen
           }}>

            <Stack.Screen name="login"/>
           </Stack>
          
    );






}
    
    
   