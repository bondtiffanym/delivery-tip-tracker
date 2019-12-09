import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DeliveryContext } from '../Context';

export default function AddDelivery() {
    const {addDelivery} = useContext(DeliveryContext);
    const [address, setAddress] = useState("");
    const [tip, setTip] = useState("");


    return (
        <div className="container container-fluid mx-auto my-4">
            <div className="card mx-auto w-lg-50">
                <h1 className="text-center card-title my-4">Add A New Delivery</h1>
                <div className="card-body text-center shadow">
                    <form>
                        
                            <div className="form-group row">
                                <label for="address" className="col-sm-2 col-form-label">Address</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="address" placeholder="123 Smith Ln" value={address} onChange={e => setAddress(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="tip" className="col-sm-2 col-form-label">Tip $</label>
                                <div className="col-sm-10">
                                <input type="number" id="tip" placeholder="3.50" value={tip} onChange={e => setTip(e.target.value)} className="form-control" />
                                </div>
                   
                            </div>
                            <Link to="/">
                                <button className="btn btn-outline-dark mx-auto"
                                onClick={() => {
                                addDelivery(address, tip);
                                setAddress("");
                                setTip("");
                                }}>Add Delivery</button>
                            </Link>

                    </form>

                </div>
            </div>
        </div>
    )
}
