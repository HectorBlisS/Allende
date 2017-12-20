import React from 'react';
import firebase from '../../firebase/firebase';
import {AppBar, FlatButton, MenuItem, IconMenu, IconButton} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Link} from 'react-router-dom';
import toastr from 'toastr';


const Logged = (props) => (
    <IconMenu
        iconStyle={{color:"white"}}
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem containerElement={ <Link style={{textDecoration:"none"}} to="/admin"/>} primaryText="Admin"/>
        {/*<Link style={{textDecoration:"none"}} to="/dashboard">
        <MenuItem primaryText="Dashboard" />
        </Link>*/}
        <Link style={{textDecoration:"none"}} to="/inventario/dashboard">
            <MenuItem primaryText="Inventario" />
        </Link>
        <MenuItem onClick={props.logout} primaryText="Cerrar sesión" />
    </IconMenu>
);



export const NavBarDisplay = ({title, drawer, menu=false, onMenuClick, userActions, logged, history}) => {
    const logout = () => {
        userActions.cerrarSesion()
            .then( r => {
                //toastr.success('See ya');
                history.push('/login');
            })
            .catch( e => {
                toastr.error(e.message)
            });
    };



    return (
        <div className="transition"  style={drawer ? styles.barOpen:null}>
            <AppBar
                style={styles.bar}
                title={title}
                showMenuIconButton={menu}
                iconElementRight={!logged ? <Logged logout={logout}/> : <FlatButton label="Entrar" />}
                onLeftIconButtonTouchTap={onMenuClick}
            />


        </div>
    );
};

//NavBarDisplay.propTypes = {};

const styles = {
    barOpen: {
        paddingLeft:"256px"
    },bar:{
        backgroundColor:"#424242"
    }
};

