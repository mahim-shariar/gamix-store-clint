import { useEffect, useState } from 'react';
import InitFirebase from '../../Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile} from "firebase/auth";


InitFirebase();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const [admin,setAdmin] = useState(false);
    // const [token,setToken] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const RegistarUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const newUser = { email, displayName: name };
                setUsers(newUser)
                saveUser(email,name,'POST')
                updateProfile(auth.currentUser, {
                    displayName:name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/')
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(()=>{
        fetch(`https://rocky-depths-49949.herokuapp.com/users/${users.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[users.email])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUsers({})
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }
    const logInUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setUsers(res.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }


    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        const auth = getAuth();
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                let user = result.user
                saveUser(user.email,user.displayName,"PUT")
                const destination = location?.state?.from || '/';
                history.replace(destination)
                console.log(error);
                setError('')
            }).catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, users => {
            if (users) {
                setUsers(users);
                // getIdToken(users)
                // .then(idToken=>{
                //     setToken(idToken)
                // })
            }
            else {
                setUsers({});
            }
            setIsLoading(false);
        })
        return () => unsubscribe;
    },[auth])

    const saveUser = (email,displayName,method)=>{
        const user = {email,displayName};
        fetch('https://rocky-depths-49949.herokuapp.com/users',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }
    return {
        users,
        admin,
        RegistarUser,
        logOut,
        logInUser,
        error,
        setError,
        isLoading,
        signInWithGoogle
    }
}
export default useFirebase;