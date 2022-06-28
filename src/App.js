import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Product, Cart } from './pages';
import { TopNav } from './components';
import { CartStoreProvider } from './contexts/Cart/CartStoreProvider';

import './assests/styles/styles.scss';

const App = () => {

	return (
		<BrowserRouter>
			<>
				<CartStoreProvider>
					<TopNav></TopNav>
					<div className="main">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="products/:id" element={<Product />}>
								<Route path=":vid" element={<Product />} />
							</Route>
							<Route exact path="/images" />
							<Route path="/cart" element={<Cart />} />
						</Routes>
					</div>
				</CartStoreProvider>
			</>
            
           
		</BrowserRouter>
     
	);
};

export default App;