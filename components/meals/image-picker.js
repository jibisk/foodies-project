'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label, name}) {

  const [pickerImage, setpickerImage] = useState(null)
  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if(!file){
      setPickedImage(null);
       return 
      }

    const fileReader = new FileReader();

    fileReader.onload = ()=>{
      setpickerImage(fileReader.result);
    }

    fileReader.readAsDataURL(file);

  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
         <div className={classes.preview}>
          {!pickerImage && <p>no image</p>}
          {pickerImage && <Image src={pickerImage} alt={pickerImage} fill />}
         </div>
        <input 
        type='file' 
        id={name} 
        accept='image/png, image/jpeg' 
        name={name} 
        className={classes.input} 
        ref={imageInputRef} 
        onChange={handleImageChange}
        // required
        /> 
        <button className={classes.button} type='button' onClick={handlePickClick}>Pick Image</button>
      </div>
    </div>
  );
}
