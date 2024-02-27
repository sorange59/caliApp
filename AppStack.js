import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App'; // Assuming your main component is in App.js
import Menu from './Menu';

const Stack = createStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator>
		<Stack.Screen name="Home" component={App} />
		<Stack.Screen name="Menu" component={Menu} />
		</Stack.Navigator>
	);
};

export default AppStack;
