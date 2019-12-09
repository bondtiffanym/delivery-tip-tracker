import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Deliveries from './Deliveries';
import { DeliveryContext } from '../Context';

export default function DeliveryList() {
   const {initialDeliveries} = useContext(DeliveryContext);

    return (
        
        <div>
           <h1 className="text-center">Hello from Delivery List!</h1>
            <Link to="/add" className="text-center font-weight-bold">
                Add New Delivery <i className="fas fa-plus-circle"></i>
            </Link>
            <ul>
                {initialDeliveries.map((delivery) => {
                    return <Deliveries key={delivery.id} delivery={delivery} />
                })}
            </ul>

        </div>
    )
}
