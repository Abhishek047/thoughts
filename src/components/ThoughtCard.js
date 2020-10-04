import React, { useState } from 'react'
import Dialog from './Dialog';
import { motion } from 'framer-motion';

function ThoughtCard( {thought} ) {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <motion.div  
            layout
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ delay:.5 }}
            className="card" >
                <img src={thought.url} alt={thought.url} />
                <p>{thought.text}</p>
                <button className="btn card-btn" onClick={()=> setOpen(!open)}>Show</button>
                {open && <Dialog text={thought.text} url={thought.url} setOpen={setOpen} />}
            </motion.div>
        </React.Fragment>
    )
}

export default ThoughtCard
