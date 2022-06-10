import React, {useState, useEffect} from 'react';
import ImageLink from '../ImageLink';

import './ImageSelector.styles.scss';

function ImageSelector({images}) {

	const [ selectedImage, setSelectedImage ] = useState();
	const [ mouseOutImage, setMouseOutImage ] = useState();
    
	useEffect(()=>{
		if(Array.isArray(images)) setSelectedImage(images[0]);
	},[images]);

	const handleSelectImage = (e,image) => {
		
		setSelectedImage(image);
		// e.preventDefault();
	};

	const handleMouseOverImage = (e, image) => {
		setMouseOutImage({...image});
		// setSelectedImage(image);
		// e.preventDefault();
	}

	const handleMouseOutImage = (e, img) => {
		setMouseOutImage(null);
		// e.preventDefault();
	}

	return (
		<div className="image-selector">
			<div className="selectable-images">
				{
					selectedImage && Array.isArray(images) ? images.map((img) => (
						<div 
							key={img.id}
							className={`${img.id === selectedImage.id ? 'selected' : ''} thumbnail-container`}
						>
							<button 
							onMouseOver={(e) => { handleMouseOverImage(e, img)}}
							onMouseOut={(e) => { handleMouseOutImage(e)}}
							onClick={(e) => { handleSelectImage(e,img); }}><ImageLink src={img.url} className="thumbnail"></ImageLink></button>
						</div> 
					)) : ''
             
				}
			</div>
			<div className="image-view">
				{ selectedImage && <ImageLink src={mouseOutImage ? mouseOutImage.url : selectedImage.url} className="main-image"></ImageLink>}
			</div>
		</div>
	);
}

export default ImageSelector;
