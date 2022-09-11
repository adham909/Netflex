import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBl8B7HXO_3kVmK_scuUQ19rh3aPCySXQs",
    authDomain: "netflex-clone-bfc00.firebaseapp.com",
    projectId: "netflex-clone-bfc00",
    storageBucket: "netflex-clone-bfc00.appspot.com",
    messagingSenderId: "316568324215",
    appId: "1:316568324215:web:ab97e75a445836849f9e72",
  };

    const app = initializeApp(firebaseConfig);

   export const auth = getAuth(app);

  