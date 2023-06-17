import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Semana15 } from '../screens/Semana15';
import { OtraPantalla } from '../screens/OtraPantalla';

const Stack = createNativeStackNavigator();

export const Root = () => {
	return (
		<Stack.Navigator
			initialRouteName="Semana15"
			screenOptions={{
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen
				name="Semana15"
				component={Semana15}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="OtraPantalla"
				component={OtraPantalla}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};
