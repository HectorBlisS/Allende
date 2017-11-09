import React from 'react';
import {AppBar, MenuItem, IconMenu, IconButton} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export const NavBarDisplay = ({title, drawer, slug, onMenuClick, userActions}) => {
    return (
        <div>
            <AppBar
                style={styles.bar}
                title={title}
                onLeftIconButtonTouchTap={onMenuClick}
                iconElementRight={
                    <IconMenu

                        iconButtonElement={
                            <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" onClick={userActions.cerrarSesion}/>
                    </IconMenu>
                }
            />

        </div>
    );
};

//NavBarDisplay.propTypes = {};

const styles = {
    bar: {}
};

