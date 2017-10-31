import React from 'react';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui';




const DistributorList = ({props}) => {
    return (
        <div>
            <Table>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Inventario</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>4567</TableRowColumn>
                        <TableRowColumn>ChuckyChelas</TableRowColumn>
                        <TableRowColumn>$123</TableRowColumn>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
};

export default DistributorList;