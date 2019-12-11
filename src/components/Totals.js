import React, { useContext } from 'react';
import { DeliveryContext } from '../Context';

export default function Totals() {
    const {totalTips, deliveries} = useContext(DeliveryContext);
    return (
        <div className="row mx-4">
                <div className="col-5 mx-auto">
                    <span className="font-weight-bold input-group-text">Total Deliveries: {deliveries.length}</span>
                </div>
                <div className="col-5 mx-auto">
                    <span className="font-weight-bold input-group-text">Total Tips: ${parseFloat(totalTips).toFixed(2)}</span>
                </div>
            </div>
    )
}
