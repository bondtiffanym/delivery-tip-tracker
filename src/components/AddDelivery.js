import React, { useState, useContext } from 'react';
import { DeliveryContext } from '../Context';

export default function AddDelivery() {
    const { addDelivery, handleSubmit } = useContext(DeliveryContext);
    const [address, setAddress] = useState("");
    const [tip, setTip] = useState("");


    return (
        
        <div className="container container-fluid mx-auto my-4">

            {/* Dismissable Alert hidden until settings have been updated */}
            <div className="alert alert-danger alert-dismissible fade show d-none" role="alert" 
            id="add-delivery-alert">
                <button type="button" 
                className="close" 
                aria-label="Close" 
                onClick={() => {
                    document.getElementById('add-delivery-alert').classList.add('d-none');
                }}>
                    <span aria-hidden="true">&times;</span>
                </button>
                Please fill out address form below.
            </div>


            <div className="card mx-auto w-lg-50">
                <h1 className="text-center card-title my-4">Add A New Delivery</h1>
                <div className="card-body shadow">
                    <form onSubmit={handleSubmit}>
                        
                            <div className="form-group row text-right">
                                <label className="col-sm-2 col-form-label">Address</label>
                                <div className="col-sm-10">
                                    <input type="text" 
                                    className="form-control" 
                                    id="address" 
                                    placeholder="123 Smith Ln" 
                                    value={address} 
                                    onChange={e => setAddress(e.target.value)} 
                                    className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row text-right">
                                <label className="col-sm-2 col-form-label">Tip $</label>
                                <div className="col-sm-10">
                                <input type="number" 
                                id="tip" 
                                placeholder="0.00" 
                                value={tip} 
                                onChange={e => setTip(e.target.value)} 
                                className="form-control" />
                                </div>
                   
                            </div>
                                <div className="text-center">
                                    <button type="submit"
                                    onClick={() => { 
                                        addDelivery(address, tip);
                                        setAddress("");
                                        setTip("");
                                         }}
                                    className="btn btn-outline-success mx-auto">Add Delivery</button>
                                </div>

                    </form>

                </div>
            </div>
        </div>
    )
}
