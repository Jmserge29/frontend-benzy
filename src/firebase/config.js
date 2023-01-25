// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, getDownloadURL, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY_APIKEY,
  authDomain: process.env.FIREBASE_KEY_AUTHDOMAIN,
  projectId: process.env.FIREBASE_KEY_PROJECTID,
  storageBucket: 'benzydb-93fa6.appspot.com',
  messagingSenderId: process.env.FIREBASE_KEY_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_KEY_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadImage (file){
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}