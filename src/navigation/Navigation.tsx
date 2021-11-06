import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";


export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="DetailScreen" component={DetailScreen} />
    </RootStack.Navigator>
  );
};
