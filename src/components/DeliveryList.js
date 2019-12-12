import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Deliveries from './Deliveries';
import Totals from './Totals';
import { DeliveryContext } from '../Context';

export default function DeliveryList() {
   const { deliveries } = useContext(DeliveryContext);

    return (
        
        <div className="container container-fluid mx-auto">
           <h1 className="text-center my-4">Delivery Tracker</h1>
            
            <div className="text-right my-4">
            <Link to="/add" className="font-weight-bold">
                <button className="btn badge-pill badge-primary text-center"><i className="fas fa-plus mr-1"></i>New Delivery
                </button>
            </Link>
            {deliveries.length > 0 && 
            <button className="btn badge-pill badge-danger text-center ml-2"
            data-toggle="modal" data-target="#clear-all-modal"><i className="far fa-trash-alt mr-1"></i>Clear All</button>}
            
            </div>

            <ul style={{'listStyleType': 'none'}} className="mx-auto">
                {deliveries.map((delivery) => {
                    return <Deliveries key={delivery.id} delivery={delivery} />
                })}
            </ul>
            <Totals />

        </div>
    )
}