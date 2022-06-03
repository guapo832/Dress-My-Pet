import React from 'react';

function SizeSelector({sizeOptions}) {

	if(sizeOptions && sizeOptions.length > 0) {
		return <ul>
			{
				sizeOptions.map((sz) => {
					return <li key={sz.id} className="size-option">
						<button onClick={() =>{console.log('change size');}}>{sz.name}</button>
					</li>;
				})
			}
		</ul>;
	}
        
        
	return '';
  
       
}

export default SizeSelector;
