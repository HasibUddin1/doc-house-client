
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export const googleSignIn = () => {
    return async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (error) {
            console.log(error)
        }
    }
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

