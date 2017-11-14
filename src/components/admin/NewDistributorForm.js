import React from 'react';
import {TextField} from 'material-ui';

const NewDistributorForm = ({newDistributorText}) => {
    return (
        <div>
            <TextField
                floatingLabelText="Name"
                name='name'
                onChange={newDistributorText}
                className="element-distributor-form"
            /><br/>
            <TextField
                floatingLabelText="Address"
                name='address'
                onChange={newDistributorText}
                className="element-distributor-form"
            /><br/>
            <TextField
                floatingLabelText="RFC"
                name='rfc'
                onChange={newDistributorText}
                className="element-distributor-form"
            />
            <TextField
                floatingLabelText="E-mail"
                name='email'
                onChange={newDistributorText}
                className="element-distributor-form"
            />
        </div>
    )
};

export default NewDistributorForm;