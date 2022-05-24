import React from 'react';
import { IconButton, Badge  } from '@material-ui/core';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from '../../../contexts/Cart/CartStoreProvider';

import './styles.scss';

const TopNavbar = (props) => {

  const [{cart}] = useCartStore();
  return (
    <>
        <header className="nav-bar">
            <div className="left">
               <h3>Dress My Pet!</h3>
            </div>
            <div className="center"></div>
            <div className="right ">
                <IconButton color="primary" aria-label="Show cart Items">
                    <Badge  badgeContent={ cart ? cart.total_items || 0 : 0 } color="secondary">
                        <FaShoppingCart style={{color:"#F1F1F1"}}></FaShoppingCart>
                    </Badge>  
                </IconButton>
            </div>
        </header>
        
      
    </>
  )
}

export default TopNavbar

