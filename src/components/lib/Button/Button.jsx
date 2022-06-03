import React from 'react';

function Button({onClick, children}) {
	return (
		<button className="dmp-btn" onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
