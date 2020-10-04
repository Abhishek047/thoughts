import React, { useState } from 'react';
import AddThought from './components/AddThought';
import Header from './components/Header';
import Thoughts from './components/Thoughts';
import {motion} from 'framer-motion'

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header setOpen={setOpen} />
      <Thoughts />
      <motion.button 
      transition={{type:"spring", stiffness:200, duration:1}}
      whileHover={{ 
        opacity:1 ,
        scale: 1.2, 
        rotate:90, 
        borderRadius:"50%",
       
      }}  
       className="add-btn" 
       onClick={()=> setOpen(true)} >+</motion.button>
      {open && <AddThought setOpen={setOpen} />}
    </div>
  );
}

export default App;
