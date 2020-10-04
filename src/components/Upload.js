import React from 'react'
import useFirebase  from '../useFirebase'
import { motion } from 'framer-motion'

function Upload({ text, img  } ) {

    const {url, progress} = useFirebase(img, text);

    return (
        <React.Fragment>
            { url 
            ? (<motion.div 
                initial={{scale:0.6, opacity:0}}
                animate={{scale:1.1, opacity:1}}
                className="success-msg" >SUCCESS ! </motion.div>) 
            : <motion.div className="progress-bar" 
            initial={{width: 0}}
            animate={{width:`${progress}%`}}
            ></motion.div>}
        </React.Fragment>
    )
}

export default Upload
