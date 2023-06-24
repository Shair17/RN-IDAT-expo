import React from 'react';
import { FlatList } from 'react-native';

export const CartScreen = () => {
	// Los productos hay que traerlo desde redux
	const cart = [];

	return (
		<FlatList
			data={cart}
			renderItem={() => null}
			keyExtractor={(product) => product.id}
		/>
	);
};
