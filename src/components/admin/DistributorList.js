import React from 'react';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui';
import './admin.css';




const DistributorList = ({props}) => {
    return (
        <div className="distributors-table-container">
            <Table>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Last Purchase</TableHeaderColumn>
                        <TableHeaderColumn>Most Sold Product</TableHeaderColumn>
                        <TableHeaderColumn>Average Purchase($)</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>456yu7</TableRowColumn>
                        <TableRowColumn>ChuckyChelas</TableRowColumn>
                        <TableRowColumn>$123</TableRowColumn>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
};

export default DistributorList;