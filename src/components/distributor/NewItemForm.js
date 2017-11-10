import React from 'react';
import {TextField, RaisedButton} from 'material-ui';

const NewItemForm = ({onChangeText}) => {
    return (
        <div>
            <TextField
                onChange={onChangeText}
                floatingLabelText="Producto"
                name="producto"/><br/>
            <TextField
                onChange={onChangeText}
                floatingLabelText="Descripción"
                name="descripcion"/><br/>
            <TextField
                onChange={onChangeText}
                floatingLabelText="Cantidad"
                name="cantidad"/>
        </div>
    )
};

export default NewItemForm;