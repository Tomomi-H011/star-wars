/**
 * Star Wars App - Main Application Component
 * Bottom Tab Navigator for iOS & Web and Drawer Navigator for Android
*/
import React from "react";
import {Text, Platform, View, ImageBackground} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Planets from "./screens/Planets";
import Films from "./screens/Films";
import Spaceships from "./screens/Spaceships";
import LogoHeader from "./components/LogoHeader";
import styles from "./styles";
import Background from "./components/Background";
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';



const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Display header logo and title
function CustomHeader({ route, options }) {
  return (
    <View style={styles.customHeaderContainer}>
      <LogoHeader />
      <Text style={styles.headerTitleStyle}>
        {options.title || route.name}
      </Text>
    </View>
  );
}


export default function App() {
  const [fontsLoaded] = useFonts({
    'Orbitron': require('./assets/fonts/Orbitron-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Background>
    <NavigationContainer style={styles.NavigationContainer}>

      {Platform.OS === "ios" && (
        <Tab.Navigator
          screenOptions={{
            header: (props) => <CustomHeader {...props} />, // Display logo header above title & nav
            headerStyle: { backgroundColor: 'transparent' },
            headerTitleStyle: { color: 'silver', padding: 15 },
            tabBarStyle: {
              backgroundColor: 'transparent',
              borderWidth: 0,
              elevation: 0,
              boxShadow: 'none',
            },
            tabBarActiveTintColor: 'silver',
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Planets" component={Planets} />
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Spaceships" component={Spaceships} />
        </Tab.Navigator>  
      )}

      {Platform.OS === "android" && (
        <Drawer.Navigator
          screenOptions={{
            header: (props) => <CustomHeader {...props} />, // Display logo header above title & nav
            headerStyle: { backgroundColor: 'transparent' },
            headerTitleStyle: { color: 'silver', padding: 15 },
            headerLeft: () => (
              <Ionicons name="menu" size={28} color="silver" style={{ marginLeft: 15 }} />
            ),
            drawerStyle: {
              color: 'silver',
              backgroundColor: 'transparent',
              borderWidth: 0,
              elevation: 0,
              boxShadow: 'none',
            },
            drawerActiveTintColor: 'silver',
            drawerInactiveTintColor: 'gray',
            drawerLabelStyle: { color: 'silver' },
          }}
        >
          <Drawer.Screen name="Planets" component={Planets} />
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Spaceships" component={Spaceships} />
        </Drawer.Navigator>
      )}

      {Platform.OS === "web" && (
        <Tab.Navigator
          screenOptions={{
            header: (props) => <CustomHeader {...props} />, // Display logo header above title & nav
            headerStyle: { backgroundColor: 'transparent' },
            headerTitleStyle: { color: 'silver', padding: 15 },
            tabBarStyle: {
              backgroundColor: 'transparent',
              borderWidth: 0,
              elevation: 0,
              boxShadow: 'none',
            },
            tabBarActiveTintColor: 'silver',
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Planets" component={Planets} />
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Spaceships" component={Spaceships} />
        </Tab.Navigator>
      )}

    </NavigationContainer>
    </Background>

  );
}


