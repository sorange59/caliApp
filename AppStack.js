import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainComponent from './App'; // Assuming your main component is in App.js
import Menu from './Menu';

const Stack = createStackNavigator();

export default function AppStack() {
	return (
		<NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
		<Stack.Screen name="App" component={App} />
		<Stack.Screen name="Menu" component={Menu} />
		</Stack.Navigator>
		</NavigationContainer>
	);
}
