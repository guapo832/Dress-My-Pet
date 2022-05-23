import React from 'react';
import { IconButton, Badge  } from '@material-ui/core';
import { FaShoppingCart } from 'react-icons/fa';


import './styles.scss';

const TopNavbar = (props) => {
  return (
    <>
        <header className="nav-bar">
            <div className="left">
                <img src="" alt="Dress my Pet" height="25px" className="image" />
            </div>
            <div className="center"></div>
            <div className="right ">
                <IconButton color="primary" aria-label="Show cart Items">
                    <Badge  badgeContent={4} color="secondary">
                        <FaShoppingCart style={{color:"#F1F1F1"}}></FaShoppingCart>
                    </Badge>  
                </IconButton>
            </div>
        </header>
        
      
    </>
  )
}

export default TopNavbar

