/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {AppBar} from 'material-ui';

export const NavBarDisplay = ({title, drawer, slug, onMenuClick}) => {
    return (
        <div>
            <AppBar
                style={styles.bar}
                title={title}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={onMenuClick}
            />

        </div>
    );
};

//NavBarDisplay.propTypes = {};

const styles = {
    bar: {}
};

