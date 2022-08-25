import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX3TZfeyLaPv8P6XbvTB-vSytjQtNXGw4",
  authDomain: "vuex-4-fb-auth-1fd5d.firebaseapp.com",
  projectId: "vuex-4-fb-auth-1fd5d",
  storageBucket: "vuex-4-fb-auth-1fd5d.appspot.com",
  messagingSenderId: "21550499759",
  appId: "1:21550499759:web:800bd6721b4480484ed15a",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
