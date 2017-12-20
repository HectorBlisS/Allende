/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';



const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

const tableData = [
    {
        name: 'John Smith',
        status: 'Employed',
    },
    {
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        name: 'Stephanie Sanders',
        status: 'isAdmin',
    },
    {
        name: 'Steve Brown',
        status: 'Storage',
    },
    {
        name: 'Joyce Whitten',
        status: 'Storage',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
];

export const Bodega = ({props}) => {
    return (
        <div>
            <Table
                selectable={true}
                multiSelectable={true}
            >
                <TableHeader
                    displaySelectAll={true}
                    adjustForCheckbox={true}
                    enableSelectAll={true}
                >
                    <TableRow>
                        <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                            Administración de empleados
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={true}
                    deselectOnClickaway={true}
                    showRowHover={true}
                    stripedRows={true}
                >
                    {tableData.map( (row, index) => (
                        <TableRow key={index}>
                            <TableRowColumn>{index}</TableRowColumn>
                            <TableRowColumn>{row.name}</TableRowColumn>
                            <TableRowColumn>{row.status}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

            <FloatingActionButton
                backgroundColor={"grey"}
                style={{position:"fixed", right:25, bottom:25}}>
                <ContentAdd />
            </FloatingActionButton>
        </div>
    );
};



