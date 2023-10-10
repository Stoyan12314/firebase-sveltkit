import { initializeApp } from "firebase/app";
import {getFirestore, doc, onSnapshot} from "firebase/firestore";
import{getAuth, onAuthStateChanged, type User} from "firebase/auth";
import {getStorage} from "firebase/storage";
import{derived, writable, type Readable} from "svelte/store";

const firebaseConfig = {
    apiKey: "AIzaSyBRqH60oJ5fX0HWCCrRMi5cSZ6CCLMkX8E",
    authDomain: "test-8e37c.firebaseapp.com",
    projectId: "test-8e37c",
    storageBucket: "test-8e37c.appspot.com",
    messagingSenderId: "936446466147",
    appId: "1:936446466147:web:9113e24e101c3f5fb78056",
    measurementId: "G-YRDBZPP1L7"
  };


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();




export function docStore<T>(
  path: string,
) {
  let unsubscribe: () => void;

  const docRef = doc(db, path);

  const { subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
    ref: docRef,
    id: docRef.id,
  };
}


interface UserData {
  username: string;
  bio: string;
  photoURL: string;
  published: boolean;
  links: any[];
}
export const userData: Readable<UserData | null> = derived(user, ($user, set) => { 
  if ($user) {
    return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
  } else {
    set(null); 
  }
});  