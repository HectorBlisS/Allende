import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Drawer, MenuItem} from 'material-ui';

class InventarioPage extends Component {

    state = {
      title:"",
      drawer:false,
      slug:""
    };

    componentDidMount(){
        this.setState({
            title:this.props.title,
            drawer:this.props.drawer,
            slug:this.props.slug
        });
    }
    componentWillReceiveProps(p){
        this.setState({
            title:p.title,
            drawer:p.drawer,
            slug:p.slug
        });
    }

    render() {
        const {drawer} = this.state;
        return (
            <div>
                El inventario paps
                <Drawer open={drawer}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {...state.bar};
}

export default connect(mapStateToProps)(InventarioPage);