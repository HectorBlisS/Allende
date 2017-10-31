import React from 'react';
import {Paper} from 'material-ui';

const ProductoDash = (props) => {
    const {tipo, img} = props;
    return (
        <Paper zDepth={3}>
            <img
                className="productoDashElement"
                src={img}
                style={{
                    height: 250,
                    minWidth: 30,
                    width: 100
                }}
            />
            <div className="productoDashElement">
                <p style={{
                    display: 'block'
                }}>Hola</p>
                <p style={{
                    display: 'block'
                }}>Hola</p>
            </div>
        </Paper>
    );
};

export default ProductoDash;