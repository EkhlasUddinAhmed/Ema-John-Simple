

import firebaseInitialize from '../Firebase/firebase.Initialize';
import { useState } from 'react';
import { getAuth,signInWithPopup,signOut,GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';


firebaseInitialize();


const useFirebase=(props)=>{
    
    const [loggedUser,setloggedUser]=useState({});
    const [error, setError]=useState('');

        const provider = new GoogleAuthProvider();
        const auth = getAuth();
    const signInWithGoogle=()=>{
       return signInWithPopup(auth, provider);
         
    }
   
    const signOutWithGoogle=()=>{

        
        signOut(auth).then(() => {
            setloggedUser({});

        }).catch((error) => {
          console.log(error.message);
        });

    }

    useEffect(()=>{
        
        
        onAuthStateChanged(auth, (user) => {
          if (user) {
            
            
            setloggedUser(user);
           
            
          } else {
            
          }
        });
        


    },[])

    return{
        loggedUser,
        error,
        signInWithGoogle,
        signOutWithGoogle
    }

}

export default useFirebase;