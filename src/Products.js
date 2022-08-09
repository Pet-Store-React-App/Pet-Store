import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import './Products.css';

function Products() {
    return (
        <div className='Products'>
            <header className='Products-header'>
                <h2>Products</h2>
            </header>
            <Navbar />
            <Search />
        </div>
    );
}

export default Products;