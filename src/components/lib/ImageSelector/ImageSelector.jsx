import React, {useState, useEffect} from 'react'
import ImageLink from '../ImageLink'

import './ImageSelector.styles.scss';

function ImageSelector({images}) {

    const [ selectedImage, setSelectedImage ] = useState();
    
    useEffect(()=>{
        if(Array.isArray(images)) setSelectedImage(images[0]);
    },[images]);

  const handleSelectImage = (e, image) => {
    setSelectedImage(image);
  }

  return (
    <div className="image-selector">
      <div className="selectable-images">
          {
              selectedImage && Array.isArray(images) ? images.map((img) => (
                 <div key={img.id} className={`${img.id === selectedImage.id ? 'selected' : ''} thumbnail-container`}>
                   <button onClick={(e) => { handleSelectImage(e, img); }}><ImageLink src={img.url} className="thumbnail"></ImageLink></button>
                 </div> 
               )) : ''
             
          }
      </div>
      <div className="image-view">
          { selectedImage && <ImageLink src={selectedImage.url} className="main-image"></ImageLink>}
      </div>
    </div>
  )
}

export default ImageSelector
