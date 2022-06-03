import React from 'react';

function ImageLink({src, alt, className}) {
	return (
		<img src={src} alt={alt || ''} className={className || ''}/>
	);
}

export default ImageLink;
