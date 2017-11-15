import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
        FloatingActionButton, RaisedButton,
        Dialog, Subheader, TextField, CircularProgress,
        Table, TableBody, TableHeader, TableRow, TableRowColumn, TableHeaderColumn} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import toastr from 'toastr';
//redux
import {clientWatcher} from "../../firebase/watchers";
import firebase from '../../firebase/firebase';
import {saveClient, removeClient} from "../../redux/actions/clientsActions";


const RowTable = ({onEdit, key, id, name, rfc, description, ...otherProps}) => (
    <TableRow
        {...otherProps}>
        {otherProps.children[0]}
        <TableRowColumn>{id}</TableRowColumn>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{rfc}</TableRowColumn>
        <TableRowColumn>{description}</TableRowColumn>
        <TableHeaderColumn>
            <RaisedButton
                onClick={()=>onEdit(id)}
                label="Editar"
            />
        </TableHeaderColumn>
    </TableRow>
);

class Clientes extends Component {

    state = {
        clientes:[],
        openForm:false,
        client:{name:'',rfc:'',description:''},
        errors:{}
    };

    componentWillMount(){
        clientWatcher.initWatch();
    }

    componentDidMount(){
        const {clientes} = this.props;
        this.setState({clientes});
    }
    componentWillReceiveProps(props){
        const {clientes} = props;
        this.setState({clientes});
    }

    handleOpenForm = () => {
      this.setState({openForm:!this.state.openForm});
    };

    setNewClient = () => {
        let client={name:'',rfc:'',description:''};
        this.setState({client});
        this.handleOpenForm();
    };

    onChangeForm = (e) => {
        let client = this.state.client;
        const field = e.target.name;
        const value = e.target.value;
        client[field] = value;
        this.setState({client});
    };

    validateForm = () => {
        const client = this.state.client;
        let errors = {};
        let isValid = true;
        if(client.name.length < 3) {
            errors.name = "El nombre es muy corto";
            isValid = false;
        }
        this.setState({errors});
        return isValid;
    };

    onSubmitClient = (e) => {
        e.preventDefault();
        //validacion
        if (this.validateForm()) this.props.saveClient(this.state.client)
            .then(()=>{
            toastr.success("se guardó");
            this.setState({openForm:false});
            })
            .catch(()=>toastr.error("fallé"));
    };

    onEditClient = (id) => {
        const client = this.state.clientes.find(c=>c.id === id);
        //console.log(client);
        this.setState({client, openForm:true});
    };

    onRemoveClient = () => {};

    render() {
        const {clientes} = this.state;
        const {fetched} = this.props;
        //console.log(clientes);
        if(!fetched) return <CircularProgress/>
        return (
            <div>
                <h2>Tus clientes</h2>
                <Table
                    selectable={false}
                    style={styles.body} bodyStyle={styles.body}>
                    <TableHeader
                        style={styles.header}
                    >
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Nombre</TableHeaderColumn>
                            <TableHeaderColumn>RFC</TableHeaderColumn>
                            <TableHeaderColumn>Descripción</TableHeaderColumn>
                            <TableHeaderColumn>Edición</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {clientes.map((c,i)=><RowTable onEdit={this.onEditClient} key={i} {...c} />)}
                    </TableBody> :


                </Table>

                <FloatingActionButton
                    onClick={this.setNewClient}
                    backgroundColor="#424242"
                    style={styles.button}>
                    <ContentAdd />
                </FloatingActionButton>

                <Dialog
                    open={this.state.openForm}
                    onRequestClose={this.handleOpenForm}
                >
                    <Subheader
                        inset
                    >
                        Agrega un cliente nuevo
                    </Subheader>

                    <form style={styles.form} onSubmit={this.onSubmitClient}>
                        <TextField
                            name="name"
                            floatingLabelText={"Nombre de tu cliente"}
                            onChange={this.onChangeForm}
                            value={this.state.client.name}
                            hintText={"Juanito Perez"}
                            errorText={this.state.errors.name}
                        />
                        <TextField
                            name="rfc"
                            floatingLabelText={"RFC de tu cliente"}
                            onChange={this.onChangeForm}
                            value={this.state.client.rfc}
                            hintText={"camh889898sk2"}
                            errorText={this.state.errors.rfc}
                        />
                        <TextField
                            name="description"
                            floatingLabelText={"Descripción de tu cliente"}
                            onChange={this.onChangeForm}
                            value={this.state.client.description}
                            hintText={"La tiendita de la esquina"}
                            style={{minWidth:"100%"}}
                            errorText={this.state.errors.description}
                        />
                        <RaisedButton
                            labelColor="#FFF"
                            backgroundColor="#424242"
                            label="Guardar"
                            type="submit"/>
                        <RaisedButton
                            labelColor="#FFF"
                            backgroundColor="#999"
                            label="Cancelar"
                            onClick={this.handleOpenForm}
                            />
                    </form>

                </Dialog>

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
    },
    form:{
        display:"flex",
        flexWrap:"wrap",
        alignItems:"flex-end",
        justifyContent:"space-around"
    }
};

function mapStateToProps(state, ownProps) {
    return {
        clientes: state.clients.myClients,
        fetched:state.clients.myClients.length > 0
    };
}



export default Clientes = connect(mapStateToProps, {saveClient, removeClient})(Clientes);