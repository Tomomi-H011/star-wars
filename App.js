/**
 * Star Wars App - Main Application Component
 * Bottom Tab Navigator for iOS & Web and Drawer Navigator for Android
*/

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Platform} from "react-native";
import Planets from "./screens/Planets";
import Films from "./screens/Films";
import Starships from "./screens/Starships";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Planets" component={Planets} />
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Starships" component={Starships} />
        </Tab.Navigator>  
      )}

      {Platform.OS === "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Planets" component={Planets} />
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Starships" component={Starships} />
        </Drawer.Navigator>
      )}

      {Platform.OS === "web" && (
        <Tab.Navigator>
          <Tab.Screen name="Planets" component={Planets} />
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Starships" component={Starships} />
        </Tab.Navigator>
      )}

    </NavigationContainer>
  );
}


