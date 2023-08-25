import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ComponentType} from 'react';
import Screen from '../configs/screen';
import HomeScreen from '../../screens/homeScreen';

const Stack = createNativeStackNavigator();

export default function PrivateRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.HOME}
        component={HomeScreen as ComponentType}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
