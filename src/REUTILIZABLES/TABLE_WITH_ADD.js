import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    FloatingActionButton,
    Table, TableBody, TableHeader, TableRow, TableRowColumn, TableHeaderColumn} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

//watchers
import {clientesWatcher} from '../firebase/watchers';


const RowTable = ({key, name, rfc, description, ...otherProps}) => (
    <TableRow {...otherProps}>
        {otherProps.children[0]}
        <TableRowColumn>{key}</TableRowColumn>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{rfc}</TableRowColumn>
        <TableRowColumn>{description}</TableRowColumn>
    </TableRow>
);

class Clientes extends Component {

    state = {
        clientes:[]
    };

    componentWillMount(){

    }

    componentDidMount(){
        const {
            clientes
        } = this.props;
        this.setState({
            clientes
        });
    }
    componentWillReceiveProps(props){
        const {
            clientes
        } = props;
        this.setState({
            clientes
        });
    }

    render() {
        const {clientes} = this.state;
        return (
            <div>
                <h2>Tus clientes</h2>
                <Table style={styles.body} bodyStyle={styles.body}>
                    <TableHeader
                        style={styles.header}
                    >
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Nombre</TableHeaderColumn>
                            <TableHeaderColumn>RFC</TableHeaderColumn>
                            <TableHeaderColumn>Descripción</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {clientes.map(c=><RowTable key={c.key} {...c} />)}
                    </TableBody>
                </Table>

                <FloatingActionButton
                    backgroundColor="#424242"
                    style={styles.button}>
                    <ContentAdd />
                </FloatingActionButton>

            </div>
        );
    }
}

const styles = {
    header:{
        backgroundColor:"lightgrey"
    },
    body:{
        minWidth:1000,
        position:"relative",
        maxWidth:1000,
        margin:"0 auto",
        marginTop:"10px"
    },
    button:{
        position:"fixed",
        bottom:"40px",
        right:"40px"
    }
};

function mapStateToProps(state, ownProps) {
    return {
        clientes: state.clientes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default Clientes = connect(mapStateToProps, mapDispatchToProps)(Clientes);