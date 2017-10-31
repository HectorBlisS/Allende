import React from 'react';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui';
import './admin.css';




const DistributorList = ({distributors}) => {
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
                    {distributors.map(d => {
                        return (
                            <TableRow>
                                <TableRowColumn>{d.key}</TableRowColumn>
                                <TableRowColumn>{d.name}</TableRowColumn>
                                <TableRowColumn>January 15</TableRowColumn>
                                <TableRowColumn>Artesanal Beer {Math.round(Math.random() * 3 +1)}</TableRowColumn>
                                <TableRowColumn>$123</TableRowColumn>
                            </TableRow>
                        );
                    })}

                </TableBody>
            </Table>
        </div>
    )
};

export default DistributorList;