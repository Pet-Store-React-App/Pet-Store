import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import './Products.css';
import {getProducts} from './axios';
import {useState, useEffect} from 'react';
import ListPage from './ListPage';

function Products() {
    const [products, setProducts] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect( () => {
        getProducts()
        .then(json => { setProducts(json); return json; })
        .then(json => { setSearchResults(json); })
    }, []);

    return (
        <div className='Products'>
            <header className='Products-header'>
                <h2>Products</h2>
            </header>
            <Navbar />
            <Search products={products} setSearchResults={setSearchResults}/>
            <ListPage searchResults={searchResults}/>

        </div>
    );
}

export default Products;