import { getAuth } from 'firebase/auth'
import app from './firebase'

// Obtener la instancia de autenticación de Firebase
const auth = getAuth(app)

export default auth
