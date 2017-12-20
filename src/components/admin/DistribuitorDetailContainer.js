import React from 'react';
import DashboardComponent from "../dashboard/DashboardComponent";
import DistributorDashboard from "../distributor/DistributorDashboard";

const DistribuitorDetailContainer = ({distributor, fetched}) => {
    console.log(distributor);
    return (
        <div>
            {fetched?
                <DistributorDashboard distributor={distributor}/>
            :
            'Loading'}
        </div>
    )
};

export default DistribuitorDetailContainer;