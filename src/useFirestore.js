import { useEffect, useState } from 'react';
import { firebaseFireStore } from './config/firebaseConfig';

const useFirestore = (collectionName) => {

    const [docs, setDocs] = useState([]);

    useEffect(()=>{
        const unsub = firebaseFireStore.collection(collectionName)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents =[];
            snap.forEach((doc)=>{
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents);
        })

        return () => unsub();

    },[collectionName]);

    //Return in CURLY BRACE
    return{ docs };
}

export default useFirestore;