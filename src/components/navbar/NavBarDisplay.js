/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {AppBar} from 'material-ui';

export const NavBarDisplay = ({props}) => {
    return (
        <div>
            <AppBar
                style={styles.bar}
                title="Inventario"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </div>
    );
};

//NavBarDisplay.propTypes = {};

const styles = {
    bar: {}
};

