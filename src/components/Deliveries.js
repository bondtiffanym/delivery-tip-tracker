import React from 'react';

export default function Deliveries({delivery}) {
    const {address, tip} = delivery;

    return (
        <li>
            <div>
                <span className="mx-4">Address: {address}</span>
                <span>Tip: ${tip}</span>
            </div>
        </li>
    )
}
