import React from 'react';

import './Button.styles.scss';

function Button({onClick, children, className}) {
	return (
		<button className={`dmp-btn ${className || ''}`} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
