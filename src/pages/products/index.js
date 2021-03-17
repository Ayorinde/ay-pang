import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_PRODUCTS} from '../../queries/products';
import ProductItem from '../../components/productItem'
import './index.css';

function Products () {
    const {loading, error, data} = useQuery(GET_PRODUCTS);
    if(loading) return <p> .... loading .... </p>
    if(error) return <p> Error loading products :)  {error.message}</p>
    console.log('..... data ..... : ', data);

    return (
        <div className="products">
            <header>
                <div className="header__description">
                    <h1>All Products</h1>
                    <h5>A 360° look at Lumin</h5>
                </div>
                <div className="filter__section">
                    <select>
                        <option>Filter by</option>
                    </select>
                </div>
            </header>
            <section className="products__section">
                {
                    data.products.map((product) => <ProductItem item={product} /> )
                }
                
            </section>
            
        </div>
    )
}
export default Products;