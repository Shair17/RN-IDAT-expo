import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartScreen } from './CartScreen';
import { AddProductScreen } from './AddProductScreen';

const Tab = createBottomTabNavigator();

export const Semana16 = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="AddProductScreen" component={AddProductScreen} />
			<Tab.Screen name="CartScreen" component={CartScreen} />
		</Tab.Navigator>
	);
};
