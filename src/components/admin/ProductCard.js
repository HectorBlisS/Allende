import React from 'react';
import './beer-card.css';



export const ProductCard = ({product, id}) => {
    return (
        <div className={id%2==0?"beer-card card-right":"beer-card "}>
           <div className="beer-card-image-container">
               <img src={product.image} alt=""/>
           </div>
            <div className="beer-card-info-container ">
                <h2>{product.producto}</h2>
                <p>{product.descripcion}</p>
            </div>
        </div>
    )
};
