import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { TopNav } from './components';

import './assests/styles/styles.scss';

const App = () => {
    const [products, setProducts] = useState([]);

   

    


    return (
        <BrowserRouter>
            <>
                <TopNav></TopNav>
                <Routes>
                    <Route  path="/" element={<Home />} />
                </Routes>
            </>
            
           
        </BrowserRouter>
     
    )
}

export default App;