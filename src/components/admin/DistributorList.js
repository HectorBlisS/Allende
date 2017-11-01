import React from 'react';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui';
import './admin.css';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info';
//import InfoOutlineIcon from 'material-ui/svg-icons/action/info-outline';


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
                            <TableRow key={d.key}>
                                <TableRowColumn>
                                    <Link to={"/admin/distributors/" + d.key}>
                                        <IconButton title={'Go to ' + d.key} tooltipPosition= "top-right">
                                            <InfoIcon />
                                        </IconButton>
                                    </Link>
                                </TableRowColumn>
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