import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer,DefaultTheme} from "@react-navigation/native";
import {useFonts}from 'expo-font';
import Home from "./screens/Home";
import Detail from "./screens/Detail";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors:{
  ...DefaultTheme.colors,
  background:"transparent"
  }
}
//Change theme

const App = () =>{
  return (
    <NavigationContainer theme = {theme}>
      <Stack.Navigator screenOptions={{headerShown:false}}
      initialRouteName="Home">
        <Stack.Screen name = "Home" component={Home}/>

        <Stack.Screen name = "Details" component= {Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;