import React, { useState } from 'react';

export default function AddDelivery() {
    const [address, setAddress] = useState("");

    return (
        <div className="container container-fluid mx-auto my-4">
            <div className="card mx-auto w-lg-50">
                <h1 className="text-center card-title my-4">Add A New Delivery</h1>
                <div className="card-body">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Address</span>
                        </div>
                        <input type="text" value={address} onChange={e => setAddress(e.target.value)} className="form-control" />
                    </div>

                    { /*This is just to verify that state is working. remove later after form is completed*/ }
                    <p>Address: { address }</p>
                </div>
            </div>
        </div>
    )
}
