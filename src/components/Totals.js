import React, { useContext } from 'react';
import { DeliveryContext } from '../Context';

export default function Totals() {
    const {totalTips, deliveries, mileageRate, bonusMileage } = useContext(DeliveryContext);
    return (
        <div className="card-deck ml-4 justify-content-between">
  <div className="card">
    <div className="card-header font-weight-bold text-center">Tips</div>
    <div className="card-body text-right">
      <p className="card-text"><strong>Total Tips:</strong> ${totalTips.toFixed(2)}</p>
    <p className="card-text"><strong>Average Tip Amount: </strong>${(totalTips / deliveries.length).toFixed(2)}</p>
    </div>
  </div>
  <div className="card">
    <div className="card-header text-center font-weight-bold">Deliveries & Mileage</div>
    <div className="card-body text-right">
      <p className="card-text"><strong>Total Deliveries: </strong>{deliveries.length}</p>
    <p className="card-text"><strong>Total Mileage: </strong>${(mileageRate * deliveries.length + bonusMileage).toFixed(2)}</p>
    </div>
  </div>
</div>



       /*   <div className="row mx-4">
                <div className="col-5 mx-auto">
                    <span className="font-weight-bold input-group-text">Total Deliveries: {deliveries.length}</span>
                </div>
                <div className="col-5 mx-auto">
                    <span className="font-weight-bold input-group-text">Total Tips: ${parseFloat(totalTips).toFixed(2)}</span>
                </div>
            </div> */
    )
}
