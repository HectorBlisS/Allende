/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
//import {store} from '../../index';
import {setBar} from "../../redux/actions/barActions";

//redux
import {connect} from 'react-redux';

class HomePage extends Component{
    render(){
        return(
            <div>BlisS</div>
        );
    }
}

function mapStateToProps(state){
    //console.log("que hay?: ", state)
    return {}
}

function mapDispatchToProps(dispatch){
    dispatch(setBar({title:"Cervecería Allende", slug:"home", drawer:false}));
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
