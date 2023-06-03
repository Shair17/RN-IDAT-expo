import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// import {} from 'firebase/database';
// import {} from 'firebase/firestore';
// import {} from 'firebase/storage';

export const firebaseConfig = {
	apiKey: 'AIzaSyDKk-KtXq1_2E1ccqL5ow4bjrJ44dNOvXI',
	authDomain: 'idat-da2ba.firebaseapp.com',
	projectId: 'idat-da2ba',
	storageBucket: 'idat-da2ba.appspot.com',
	messagingSenderId: '56447410860',
	appId: '1:56447410860:web:76ecbe88a6c0ed21d23509',
	measurementId: 'G-V831L7FN78',
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
