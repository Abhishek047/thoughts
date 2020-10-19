import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'


function Dialog({text, url, setOpen}) {

    const [displayText, setDisplayText] = useState(text);
    const [translate, setTranslate]= useState('normal');
    const API_URI='https://api.funtranslations.com/translate/';


    async function handleChange(e){
        setTranslate(e.target.value);
        let res;
            try {
                switch (e.target.value){
                    case 'yoda':
                        res = await axios.get(`${API_URI}yoda.json?text=${displayText}`);
                        setDisplayText(res.data.contents.translated);
                        break;
                    case 'pirate':
                        res = await axios.get(`${API_URI}pirate.json?text=${displayText}`);
                        setDisplayText(res.data.contents.translated);
                        break;
                    case 'minion':
                        res = await axios.get(`${API_URI}minion.json?text=${displayText}`);
                        setDisplayText(res.data.contents.translated);
                        break;
                    default:
                        setDisplayText(text);
                        break;
                }        
            } catch (err) {
                    console.log('SERVER ERROR')
            }   
        }

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
                        transition={{delay:0.1}}
                        initial={{opacity:0, y:"-100vh"}}
                        animate={{opacity:1, y:0}}
                        className="dailog">

                            <img src={url} alt={url} />
                            
                            <div className='translateBox'>
                            <label htmlFor='translateName'> TRANSLATE TO: </label>
                            <select name='translateName' value={translate} onChange={(e)=>handleChange(e)}>
                                <option value='normal'>Normal</option>
                                <option value='yoda'>Yoda</option>
                                <option value='pirate'>Pirate</option>
                                <option value='minion'>Minion</option>
                            </select>
                            </div>

                            <motion.p
                            transition={{delay:0.3}}
                            initial={{opacity:0, x:'-100vw'}}
                            animate={{opacity:1, x:0}}
                            >"{displayText}"</motion.p>

                    </motion.div>
            </motion.div>
        </div>
    )
}

export default Dialog
