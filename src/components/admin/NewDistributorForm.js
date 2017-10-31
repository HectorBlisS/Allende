import React from 'react';
import {TextField} from 'material-ui';

const NewDistributorForm = ({newDistributorText}) => {
    return (
        <div>
            <TextField name='name' onChange={newDistributorText}/>
        </div>
    )
};

export default NewDistributorForm;