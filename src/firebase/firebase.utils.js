import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBMN-ffWUwmJTbUvdZvxreg6X7pmok_-JM",
    authDomain: "react-ecommerce-3d8a8.firebaseapp.com",
    databaseURL: "https://react-ecommerce-3d8a8.firebaseio.com",
    projectId: "react-ecommerce-3d8a8",
    storageBucket: "",
    messagingSenderId: "829854340580",
    appId: "1:829854340580:web:705e80d15ab3a1b84823f1"
};

export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return ;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName , email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('Error createing user : ' , error);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;  