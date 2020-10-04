import React from 'react'
import { motion } from 'framer-motion'


function Dialog({text, url, setOpen}) {

    return (
        <div>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="backdrop" onClick={(e) => {
                if(e.target.classList.contains('backdrop'))
                setOpen(false);
            } } >
            <motion.div 
            transition={{delay:0.2}}
            initial={{opacity:0, y:"-100vh"}}
            animate={{opacity:1, y:0}}
            className="dailog">
                <img src={url} alt={url} />
                <p>"{text}"</p>
            </motion.div>
            </motion.div>
        </div>
    )
}

export default Dialog
