import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Drawer, MenuItem, AppBar, Menu} from 'material-ui';

//redux
import {setTitle, setSlug, toggleDrawer
//toggleDrawer
} from '../../redux/actions/barActions';
import {bindActionCreators} from 'redux';
//material
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';

//route
import {Route} from 'react-router-dom';
import Pedidos from './Pedidos';
import ProductosContainer from "./ProductosContainer";
import Clientes from './Clientes';

//import {bindActionCreators} from 'redux';

class InventarioPage extends Component {

    state = {
      title:"",
      drawer:false,
      slug:"",
        item:""
    };

    componentDidMount(){
        this.props.toggleDrawer();
    }

    // componentDidMount(){
    //     this.props.toggleDrawer();
    //     this.setState({
    //         title:this.props.title,
    //         drawer:this.props.drawer,
    //         slug:this.props.slug
    //     });
    // }
    // componentWillReceiveProps(p){
    //     //console.log(p);
    //     this.setState({
    //         title:p.title,
    //         drawer:p.drawer,
    //         slug:p.slug
    //     });
    // }

    changeRoute = (route) => {
        this.setState({item:route});
        this.props.setTitle(route);
        this.props.history.push("/inventario/" + route);
    };

    render() {
        const {item} = this.state;
        const {drawer} = this.props;
        //console.log(this.props);
        //console.log(title);
        //console.log(drawer);
        return (
            <div>
                <div className={drawer ? "drawer-open":"drawer-close"}>
                    <Route exact path="/inventario" render={()=>(<h2>Tu inventario</h2>)} />
                    <Route path="/inventario/productos" component={ProductosContainer}/>
                    <Route path="/inventario/pedidos" component={Pedidos} />
                    <Route path="/inventario/clientes" component={Clientes} />
                </div>


                <Drawer open={drawer}>
                    <AppBar style={{background:"darkgrey"}} title="Menu" showMenuIconButton={false} />
                    <Menu>
                        <MenuItem style={item === "pedidos" ? {background:"lightgrey"}:null} onClick={()=>this.changeRoute("pedidos")} primaryText="Pedidos" leftIcon={<ContentLink />} />
                        <MenuItem style={item === "productos" ? {background:"lightgrey"}:null}  onClick={()=>this.changeRoute("productos")} primaryText="Inventario" leftIcon={<RemoveRedEye />} />
                        <MenuItem
                            style={item === "clientes" ? {background:"lightgrey"}:null}
                            onClick={()=>this.changeRoute("clientes")}
                            primaryText="Clientes" leftIcon={<PersonAdd />} />
                        <Divider />
                        <MenuItem primaryText="Dashboard" leftIcon={<ContentCopy />} />
                        <MenuItem primaryText="Solcitar producto" leftIcon={<Download />} />
                        <Divider />
                        <MenuItem primaryText="Archivo" leftIcon={<Delete />} />
                    </Menu>

                </Drawer>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {...state.bar};
}

function mapDispatchToProps(dispatch, ownProps){
    //const path = ownProps.match.path;
    //console.log(path);
     dispatch(setSlug("admin"));
    return {
        setTitle:bindActionCreators(setTitle, dispatch),
        toggleDrawer:bindActionCreators(toggleDrawer, dispatch)
    }
}

//export default connect(mapStateToProps, {setTitle})(InventarioPage);
export default InventarioPage = connect(mapStateToProps, mapDispatchToProps)(InventarioPage);

