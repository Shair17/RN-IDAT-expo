import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	SafeAreaView,
	StatusBar as RNStatusBar,
} from 'react-native';
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebase';

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export default function App() {
	const [credentials, setCredentials] = useState({ email: '', password: '' });

	const handleRegister = async () => {
		if (!credentials.email || !credentials.password) {
			alert('Ingresa tus credenciales');
			return;
		}

		const response = await createUserWithEmailAndPassword(
			auth,
			credentials.email,
			credentials.password
		);
		console.log(response);
	};

	const handleAuthWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...
				console.log({ token, user });
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
				console.log({ errorCode, errorMessage, email, credential });
			});
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />

			<View style={{ marginTop: 20 }}>
				<Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
					Registrarte
				</Text>

				<TextInput
					style={styles.textinput}
					placeholder="Correo electronico"
					keyboardType="email-address"
					onChangeText={(text) => {
						setCredentials({
							...credentials,
							email: text,
						});
					}}
					value={credentials.email}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="Contraseña"
					secureTextEntry
					onChangeText={(text) => {
						setCredentials({
							...credentials,
							password: text,
						});
					}}
					value={credentials.password}
				/>

				<Button title="Registrarte" onPress={handleRegister} />
				<View style={{ marginTop: 20 }}>
					<Button
						title="Iniciar Sesion con Google"
						onPress={handleAuthWithGoogle}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: RNStatusBar.currentHeight,
	},
	textinput: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});
