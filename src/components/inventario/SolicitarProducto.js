import React from 'react';
import {TextField, Paper, SelectField, MenuItem, GridList, GridTile, RaisedButton} from 'material-ui';

const SolicitarProducto = ({props}) => {
    return (
        <div style={{padding:'3% 6%'}}>
           <GridList cols={3} cellHeight={'auto'}>
               <GridTile cols={2} style={{padding:'3%'}}>
                   <Paper zDepth={2} >

                       <SelectField
                           floatingLabelText="Cliente"
                           value={1}

                       >
                           <MenuItem value={1} primaryText="Super Chelas" />
                           <MenuItem value={2} primaryText="Expendio Beeer" />
                           <MenuItem value={3} primaryText="Miscelanea Don Gorro" />
                           <MenuItem value={4} primaryText="Bar el Oso" />
                           <MenuItem value={5} primaryText="La barata" />
                       </SelectField>
                       <br/>

                       <SelectField
                           floatingLabelText="Producto"
                           value={1}

                       >
                           <MenuItem value={1} primaryText="Brown Ale" />
                           <MenuItem value={2} primaryText="IPA" />
                           <MenuItem value={3} primaryText="Golden Ale" />
                           <MenuItem value={4} primaryText="Agave Lager" />

                       </SelectField>
                       <br/>
                       <TextField
                           floatingLabelFixed={true}
                           floatingLabelText="Cantidad"
                           hintText="Cantidad"/>
                       <br/>
                       <TextField
                           floatingLabelFixed={true}
                           floatingLabelText="Presentacion"
                           hintText="Presentacion"/>
                       <br/>
                       <RaisedButton label={'Enviar Orden'}/>

                   </Paper>
               </GridTile>
               <GridTile cols={1} style={{padding:'3%'}}>
                <Paper zDepth={2} style={{padding:'1%', marginBottom:'1%'}}>
                    <p>Producto: Brow Ale</p>
                    <p>Cantidad: 2 </p>
                    <p>Presentación: Caja</p>
                </Paper>
                   <Paper zDepth={2} style={{padding:'1%' , marginBottom:'1%'}}>
                       <p>Producto:  IPA</p>
                       <p>Cantidad: 5 </p>
                       <p>Presentación: Caja</p>
                   </Paper>
                   <Paper zDepth={2} style={{padding:'1%' , marginBottom:'1%'}}>
                       <p>Producto: Agave</p>
                       <p>Cantidad: 1 </p>
                       <p>Presentación: SuperBo</p>
                   </Paper>
               </GridTile>
           </GridList>
        </div>
    )
};

export default SolicitarProducto;