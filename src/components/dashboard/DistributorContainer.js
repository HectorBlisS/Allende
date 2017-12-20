import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import DistributorMain from "./DistributorMain";
import DashboardComponent from './DashboardComponent';
import LinearProgress from 'material-ui/LinearProgress';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

export default class TabsExampleControlled extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            completed: 0,
        };
    }
    componentDidMount() {
        this.timer = setTimeout(() => this.progress(5), 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    progress(completed) {
        if (completed > 60) {
            this.setState({completed: 60});
        } else {
            this.setState({completed});
            const diff =  5;
            this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
    }
    render() {

        return (
            <div className="dash">
                <div className="info">
                    <DistributorMain distributor={this.distributor}/>
                </div>
                <div className="tablas">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={{backgroundColor:"white",  minHeight:"90%"}}
                    >
                        <Tab label="Gráficas" value="a" style={{backgroundColor:"white", color:"black"}}>
                            <div className="borde">
                                <DashboardComponent />
                            </div>
                        </Tab>

                        <Tab label="Inventario" value="b" style={{backgroundColor:"white", color:"black"}}>
                            <div className="progress borde">
                                <h3>Inventario</h3>
                                <div>
                                    <div className="list">
                                        <p className="list_name">Cerveza Golden Ale</p>
                                        <div className="list_bar">
                                        <LinearProgress mode="determinate" value={this.state.completed} color="#6bafbd"/>

                                        </div>
                                        <span>{Math.round(this.state.completed)}%</span>
                                    </div>
                                    <hr className="line"/>
                                    <div className="list">
                                        <p className="list_name">Cerveza Brown Ale</p>
                                        <div className="list_bar">
                                            <LinearProgress mode="determinate" value={this.state.completed} color="#f3ce85" />
                                        </div>
                                        <span>{Math.round(this.state.completed)}%</span>
                                    </div>
                                    <hr className="line"/>
                                    <div className="list">
                                        <p className="list_name">Cerveza Agave Lager</p>
                                        <div className="list_bar">
                                            <LinearProgress mode="determinate" value={this.state.completed} color="#fc8675"/>
                                        </div>
                                        <span>{Math.round(this.state.completed)}%</span>
                                    </div>
                                    <hr className="line"/>
                                    <div className="list">
                                        <p className="list_name">Cerveza Allende IPA</p>
                                        <div className="list_bar">
                                            <LinearProgress mode="determinate" value={this.state.completed} color="#cfd8dc" />
                                        </div>
                                        <span>{Math.round(this.state.completed)}%</span>
                                    </div>

                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}