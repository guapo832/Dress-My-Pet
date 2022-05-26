import React, {useState, useEffect} from 'react'
import ImageLink from '../ImageLink'

import './ImageSelector.styles.scss';

function ImageSelector({images}) {

    const [ selectedImage, setSelectedImage ] = useState();
    
    useEffect(()=>{
        if(Array.isArray(images)) setSelectedImage(images[0]);
    },[images]);

    console.log('imagtes', images);
  return (
    <div className="image-selector">
      <div className="selectable-images">
          {
              selectedImage && Array.isArray(images) ? images.map((img) => (
                 <div className={`${img.id === selectedImage.id ? 'selected' : ''} thumbnail-container`}>
                    <ImageLink src={img.url} className="thumbnail"></ImageLink>
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
