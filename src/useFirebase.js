import {useState, useEffect} from 'react';
import {firebaseStore, firebaseFireStore, timestamp } from './config/firebaseConfig'

const useFirebase = (img, text) => { 

    const [progress, setProgress] = useState('');
    const [error, setError] = useState('');
    const [url, setUrl] = useState('');


    useEffect(()=>{

        //Create Refrence for the current Image in Storage
        const storeageRef = firebaseStore.ref(img.name);

        //Create a Refrence of the Collection to store
        const collectionRef = firebaseFireStore.collection('thoughts');


        //.put to input that in the storage
        storeageRef.put(img).on('state_changed', (snap) =>{
            setProgress((snap.bytesTransferred/snap.totalBytes)*100);
        }, (err) => {
            setError(err);
        }, async () => {
            //upload takes time so use async to run it when its complete to get the URL
            const url = await storeageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add( { url , text, createdAt })
            setUrl(url);
        })
    },[img, text]);

    return { progress, url, error}

}

export default useFirebase;