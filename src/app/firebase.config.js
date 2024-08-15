import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBt7V7CyNl7myeSsRuiMhcz7uKPmcJj09k',
  authDomain: 'catalyst-ui-kit.firebaseapp.com',
  databaseURL: 'https://catalyst-ui-kit-default-rtdb.firebaseio.com',
  projectId: 'catalyst-ui-kit',
  storageBucket: 'catalyst-ui-kit.appspot.com',
  messagingSenderId: '292173368031',
  appId: '1:292173368031:web:f37594dae63b95cfa5376a',
}

const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
export const auth = getAuth(app)

export default app
