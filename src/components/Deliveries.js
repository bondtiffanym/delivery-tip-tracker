import React from 'react';

export default function Deliveries({delivery}) {
    const {address, tip} = delivery;

    return (
        <li className="list-group-item list-group-item-action list-group-item-success my-1">
            <div>
                <span className="mx-4">Address: {address}</span>
                <span>Tip: ${tip}</span>
            </div>
        </li>
    )
}
