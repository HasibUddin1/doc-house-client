
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
}

export const signIn = (email, password) => {
    return async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const createUser = (email, password) => {
    return async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const logOut = () => {
    return async () => {
        try {
            await signOut(auth)
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const loggedInUser = () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser)
    })
    return () => {
        unsubscribe()
    }
}

