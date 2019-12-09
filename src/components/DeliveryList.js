import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Deliveries from './Deliveries';
import { DeliveryContext } from '../Context';

export default function DeliveryList() {
   const {deliveries, totalTips} = useContext(DeliveryContext);

    return (
        
        <div className="container container-fluid mx-auto">
           <h1 className="text-center my-4">Hello from Delivery List!</h1>
            
            <div className="text-center my-4">
            <Link to="/add" className="text-center font-weight-bold">
                <button className="btn btn-outline-primary text-center">Add New Delivery <i className="fas fa-plus-circle"></i>
                </button>
            </Link>
            </div>

            <ul style={{'listStyleType': 'none'}} className="mx-auto">
                {deliveries.map((delivery) => {
                    return <Deliveries key={delivery.id} delivery={delivery} />
                })}
            </ul>
            <div className="row mx-4">
                <div className="col-5 mx-auto">
                    <span className="font-weight-bold input-group-text">Total Deliveries: {deliveries.length}</span>
                </div>
                <div className="col-5 mx-auto">
                    <span className="font-weight-bold input-group-text">Total Tips: ${totalTips}</span>
                </div>
            </div>

        </div>
    )
}
