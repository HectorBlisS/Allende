import React from 'react';
import {TextField, RaisedButton, CircularProgress} from 'material-ui';
import './admin.css';


let elInput;

function clicki(){
    elInput.click();
}

const NewItemForm = ({onChangeText, uploadPhoto, loader, product}) => {
    return (
        <div>
            <TextField
                floatingLabelFixed={true}
                value={product.name}
                onChange={onChangeText}
                floatingLabelText="Producto"
                name="producto"/><br/>
            <TextField
                multiLine={true}
                floatingLabelFixed={true}
                value={product.descripcion}
                onChange={onChangeText}
                floatingLabelText="Descripción"
                name="descripcion"/><br/>
            <TextField
                floatingLabelFixed={true}
                value={product.precio}
                onChange={onChangeText}
                floatingLabelText="Precio"
                name="precio"/><br/>
            <div className="upload_photo">
                <input ref={input=>elInput=input} hidden type="file" onChange={uploadPhoto} className="input-photo"/>
                <div className="loader_photo">
                    {loader?<CircularProgress size={80} thickness={5} />:''}
                </div>
                {product.image?
                    <img src={product.image} alt="" className="beer_image_form" onClick={clicki} />
                    :
                    <img src={product.image} alt="" className="product_image_form" onClick={clicki} />
                }

            </div>
        </div>
    )
};

export default NewItemForm;