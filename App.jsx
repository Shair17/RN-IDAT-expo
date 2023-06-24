import { NavigationContainer } from '@react-navigation/native';
import { Root } from './navigation/Root';
import { Provider } from 'react-redux';
// import { counterStore } from './stores/counter.store';
import { cartStore } from './stores/cart.store';

export default function App() {
	return (
		<Provider store={cartStore}>
			<NavigationContainer>
				<Root />
			</NavigationContainer>
		</Provider>
	);
}
