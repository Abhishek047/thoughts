import React ,{ useState } from 'react'
import Upload from './Upload'
import { motion } from 'framer-motion'

function AddThought({setOpen}) {

    const TYPES =[ 'image/jgp', 'image/jpeg', 'image/png', 'image/bmp'];

    const [img , setImg] = useState('');
    const [text , setText] = useState('');
    const [imgError , setImgError] = useState('');
    const [textError , setTextError] = useState('');
    const [previw, setPreview]= useState('');
    const [upload, setUpload] = useState('');
    //OtherValidation

    function checkForm(){
        if(img && text){
            setImgError('');
            setTextError('');
            setUpload(<Upload text={text} img={img} />);
        }
        else{
            setUpload('');
            if(!text){
                setTextError('Enter Some Text');
            }
            if(!img){
                setImgError('Upload a Image');
            }
        }
    }


//Check For the Selected Image Is Right or Not

    function imgfunction(e){
        let selectedFile= e.target.files[0];
        if(selectedFile && TYPES.includes(selectedFile.type)){
            setPreview(URL.createObjectURL(selectedFile));
            setImg(selectedFile);
            setImgError('');
        }
        else{
            setImg(null);
            setPreview('');
            setImgError('Please Select a format of \'jpg, jpeg, png, bmp\'');
        }
    }   

    return (
        <React.Fragment>
            <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1}}
            exit={{opacity:0}}  
            className="backdrop backdrop-add" 
            onClick={ (e)=> {if(e.target.classList.contains('backdrop')) setOpen(false)}
                }>
            <motion.div 
            initial={{opacity:0, y:-200}} 
            transition={{ type: "spring", stiffness: 100, delay:0.3 }} 
            animate={{opacity:1, y:0}}
            className="container">
            <div className="img-preview">
            { previw && <img src={previw} alt={previw} /> }
            <div>
                {img && <p className="display-name-img">Selected Image : {img.name} </p>}
            </div>
            </div>
            <label className="input-image">
                Add Image
                <input type="file" onChange={imgfunction} />
            </label>
            <div>
                {imgError && <div className= "error"> {imgError} </div>}
            </div>
            <label className="input-text">
                <p>Thought</p>  
                <textarea rows={3} cols={35} value={text} onChange={(e) => setText(e.target.value)}/>
            </label>
            <div>
                {textError && <div className="error" > {textError} </div>}
            </div>
            <button className="btn" onClick={checkForm}> Submit </button>    
            { upload && upload  }
                </motion.div>    
             </motion.div>
    </React.Fragment>
    )
}

export default AddThought
