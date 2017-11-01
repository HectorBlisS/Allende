/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {AppBar, FlatButton, MenuItem, IconMenu, IconButton} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Link} from 'react-router-dom';

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
        <Link style={{textDecoration:"none"}} to="/">
        <MenuItem primaryText="Inicio" />
        </Link>
        <Link style={{textDecoration:"none"}} to="/inventario">
            <MenuItem primaryText="Inventario" />
        </Link>
        <MenuItem primaryText="Cerrar sesión" />
    </IconMenu>
);

export const NavBarDisplay = ({logged, title, drawer, slug, onMenuClick}) => {
    //console.log(slug);
    return (
        <div className="transition"  style={drawer ? styles.barOpen:null}>
            <AppBar
                title={title}
                showMenuIconButton={slug !== "home"}
                onLeftIconButtonTouchTap={onMenuClick}
                iconElementRight={!logged ? <Logged /> : <FlatButton label="Entrar" />}
            />


        </div>
    );
};

//NavBarDisplay.propTypes = {};

const styles = {
    barOpen: {
        paddingLeft:"256px"
    }
};

