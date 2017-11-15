import React from 'react';
import {GridList, GridTile} from 'material-ui';
import {ProductCard} from "./ProductCard";
import './beer-card.css';

const ProductsList = ({products, fetched}) => {
    if(!fetched){
        return <p>loading</p>
    }

    return (
        <div className="lista-cards">
            {products.map((p, key)=>{
                return(
                    <ProductCard product={p} id={key}/>
                )
            })}
        </div>
    )
};

export default ProductsList;