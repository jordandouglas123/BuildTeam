import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { Children, useContext, useState, useEffect} from 'react';
import { auth } from '../firebase/firebase-config';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();
    const [authToken, setAuthToken] = useState();

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth);
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            if(user){
                user.getIdToken().then((token) => {
                    setAuthToken(token);
                })
            }
        })
        return unsub
    }, [])
    

    const value = {
        currentUser,
        signup,
        login,
        logout,
        authToken
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
