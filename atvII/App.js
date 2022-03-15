import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from 'react-native-screens'
import principal from './src/pages/principal';
import facebook from './src/pages/facebook';
import telaLogin from './src/pages/telaLogin';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"telaLogin"}>
        <Stack.Screen name="facebook"
                      component={facebook}/>
        <Stack.Screen name="telaLogin"
                      component={telaLogin}/>
        <Stack.Screen name="principal"
                       component={principal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
