import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Semana15 } from '../screens/Semana15';
import { Semana16 } from '../screens/Semana16';
import { OtraPantalla } from '../screens/OtraPantalla';

const Stack = createNativeStackNavigator();

export const Root = () => {
	return (
		<Stack.Navigator
			initialRouteName="Semana16"
			screenOptions={{
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen
				name="Semana16"
				component={Semana16}
				options={{
					headerShown: false,
				}}
			/>
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
