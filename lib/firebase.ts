import { initializeApp } from "firebase/app"
import { getDatabase, Database } from "firebase/database"
import { getStorage } from "firebase/storage"
import { getAuth, setPersistence, browserLocalPersistence, Auth } from "firebase/auth"

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD8GVAbD5ATnMwSJxVyqBxJVar6Enu5kHA",
  authDomain: "slangtech-a3be8.firebaseapp.com",
  databaseURL: "https://slangtech-a3be8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "slangtech-a3be8",
  storageBucket: "slangtech-a3be8.firebasestorage.app",
  messagingSenderId: "894192138587",
  appId: "1:894192138587:web:11c8f9b8a086531be2c27e",
  measurementId: "G-NT9PYD915Z"
}

// Inisialisasi Firebase dengan penanganan error
let app
let database: Database | null = null
let storage = null
let auth: Auth | null = null

try {
  app = initializeApp(firebaseConfig)
  database = getDatabase(app)
  storage = getStorage(app)
  auth = getAuth(app)

  // Atur persistensi untuk menjaga user tetap login
  if (typeof window !== "undefined") {
    setPersistence(auth, browserLocalPersistence).catch((error) => {
      console.error("Error setting auth persistence:", error)
    })
  }
} catch (error) {
  console.error("Error initializing Firebase:", error)
  app = null
  database = null
  storage = null
  auth = null
}

// Pastikan hanya mengekspor objek yang valid
export { app, database, storage, auth }
