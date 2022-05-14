import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Forgot from "../pages/Forgot";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="Signup"
            options={{ headerShown: false }}
            component={Signup}
          />
          <Stack.Screen
            name="Forgot"
            options={{ headerShown: false }}
            component={Forgot}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Routes;
