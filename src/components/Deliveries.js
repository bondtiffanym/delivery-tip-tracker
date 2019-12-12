import React, { useContext } from 'react';
import { DeliveryContext } from '../Context';

export default function Deliveries({delivery}) {
    const {address, tip, id} = delivery;
    const { setSelectedDelivery, deleteDelivery } = useContext(DeliveryContext);

    return (
        <li className="list-group-item list-group-item-action list-group-item-success my-1">
            <div className="d-flex justify-content-between">
                <span className="ml-3 w-50"><b>Address:</b> {address}</span>
                <span className="mr-4 w-25"><b>Tip:</b> ${parseFloat(tip).toFixed(2)}</span>
                <span>
                    <button className="btn p-0"
                    onClick={() => {
                       setSelectedDelivery(id);
                        deleteDelivery(id);
                    }}><i className="far fa-trash-alt text-danger mx-1"></i></button>
                </span>
            </div>
        </li>
    )
}