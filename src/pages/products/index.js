import React, {useEffect} from 'react';
import {useQuery, useReactiveVar} from '@apollo/client';
import {GET_PRODUCTS} from '../../queries/products';
import ProductItem from '../../components/productItem';
import {setCurrencyVar} from '../../cache';
import './index.css';

function Products () {
    const currency = useReactiveVar(setCurrencyVar);
    const {loading, error, data} = useQuery(GET_PRODUCTS,{ variables: {currency}});
    if(loading) return <p> .... loading .... </p>
    if(error) return <p> Error loading products :)  {error.message}</p>

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
                    data.products.map((product) => <ProductItem key={product.id} item={product} /> )
                }
                
            </section>
            
        </div>
    )
}
export default Products;