import React from 'react';

export default function Deliveries({delivery}) {
    const {address, tip} = delivery;

    return (
        <li className="list-group-item list-group-item-action list-group-item-success my-1">
            <div className="d-flex justify-content-between">
                <span className="ml-3 w-50"><b>Address:</b> {address}</span>
                <span className="mr-4 w-25"><b>Tip:</b> ${parseFloat(tip).toFixed(2)}</span>
                <span><i className="far fa-edit text-muted mx-1"></i>   <i className="far fa-trash-alt text-danger mx-1"></i></span>
            </div>
        </li>
    )
}
