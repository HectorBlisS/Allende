import React from 'react';
import DashboardComponent from "../dashboard/DashboardComponent";

const DistribuitorDetailContainer = ({distributor, fetched}) => {
    console.log(distributor);
    return (
        <div>
            {fetched?
                <DashboardComponent distributor={distributor}/>
            :
            'Loading'}
        </div>
    )
};

export default DistribuitorDetailContainer;