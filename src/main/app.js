import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from "./main";
import DetailPage from "./detail_page";
import { Count } from './count';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Count>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main"  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
            <Stack.Screen name="Detail" component={DetailPage} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
    </Count>
  );
};

export default App;