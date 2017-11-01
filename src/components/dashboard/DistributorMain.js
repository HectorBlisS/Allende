import React from 'react';
import {Paper, Avatar, List, ListItem} from 'material-ui';

const DistributorMain = ({distributor}) => {
    return (
        <Paper>
            <Avatar
                src={'http://cerveceriaallende.mx/wp-content/uploads/2015/05/logo.png'}
                size={200}/>
            <List>
                <ListItem>{distributor.name}</ListItem>
                <ListItem>{distributor.address}</ListItem>
                <ListItem>{distributor.rfc}</ListItem>
                <ListItem>Stock: 20000 </ListItem>
                <ListItem>Last Purchase: 27/08/2017</ListItem>
            </List>
        </Paper>
    )
};

export default DistributorMain;