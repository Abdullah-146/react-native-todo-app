import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import axios from 'axios'




import { createStackNavigator, StackView } from "@react-navigation/stack";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Dashboard from "./screens/Dashboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShowProfile from "./screens/ShowProfile";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Context from "./Context";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}
const  ap = async ()=> { let abd =await axios.get('https://whatsapp-clone-966fa-default-rtdb.firebaseio.com/data.json' )

  const result =  Object.values(abd.data)

  console.log(result);

}

 
export default function App() {
  ap()
  axios.post('https://whatsapp-clone-966fa-default-rtdb.firebaseio.com/data.json' ,{name:'haris' , age:'21'})



 
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ShowProfile" component={ShowProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
