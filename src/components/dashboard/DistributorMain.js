import React from 'react';
import {Paper, Avatar, List, ListItem, CardTitle} from 'material-ui';

const DistributorMain = ({distributor}) => {
    return (
        <Paper className="summary_container" zDepth={2}>
            <Avatar
                className="summary_avatar"
                src={'http://cerveceriaallende.mx/wp-content/uploads/2015/05/logo.png'}
                size={150}/>
            <List className="summary_list">
                <ListItem><h2>{distributor.name}</h2></ListItem>
                <ListItem >{distributor.address}</ListItem>
                <ListItem>{distributor.rfc}</ListItem>
                <ListItem>Stock: 20000 </ListItem>
                <ListItem>Last Purchase: 27/08/2017</ListItem>
            </List>
        </Paper>
    )
};

export default DistributorMain;