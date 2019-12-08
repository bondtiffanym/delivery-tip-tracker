import React from 'react';
import { Link } from 'react-router-dom';
import Deliveries from './Deliveries';

export default function DeliveryList() {
    return (
        <div>
           <h1 className="text-center">Hello from Delivery List!</h1>
            <Link to="/add" className="text-center font-weight-bold">
                Add New Delivery <i className="fas fa-plus-circle"></i>
            </Link>
            <Deliveries />

        </div>
    )
}
