import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD0BQTHJm9m8yjIisk_DFDvCuv4FX0SPnU',
  authDomain: 'eshop-react-550e6.firebaseapp.com',
  projectId: 'eshop-react-550e6',
  storageBucket: 'eshop-react-550e6.appspot.com',
  messagingSenderId: '729688958776',
  appId: '1:729688958776:web:f5a2f3bec0d200901443cd'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth, app }
