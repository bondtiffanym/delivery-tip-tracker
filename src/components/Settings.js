import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DeliveryContext } from '../Context';

export default function Settings() {
    const { mileageRate, bonusMileage, addBonusMileage, setMileageRate, handleSubmit } = useContext(DeliveryContext);
    const [mileage, setMileage] = useState(mileageRate);
    const [bonus, setBonus] = useState(bonusMileage);
    
    return (

        <div className="container container-fluid mx-auto my-4">

            {/* Dismissable Alert hidden until settings have been updated */}
            <div className="alert alert-success alert-dismissible fade show d-none" role="alert" 
            id="settings-alert">
                <button type="button" 
                className="close" 
                aria-label="Close" 
                onClick={() => {
                    document.getElementById('settings-alert').classList.add('d-none');
                }}>
                    <span aria-hidden="true">&times;</span>
                </button>
                Settings have been successfully updated.
            </div>


            <div className="card mx-auto w-lg-50">
                <h1 className="text-center card-title my-4">Settings</h1>
                <div className="card-body shadow">
                    <form onSubmit={handleSubmit}>
                        
                            <div className="form-group row text-right">
                                <label className="col-sm-5 col-form-label">Mileage Rate per Delivery $</label>
                                <div className="col-sm-7">
                                    <input type="number" 
                                    className="form-control" 
                                    id="mileage" 
                                    placeholder={mileageRate} 
                                    value={mileage} 
                                    onChange={e => setMileage(e.target.value)} 
                                    className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row text-right">
                                <label className="col-sm-5 col-form-label">Bonus Mileage $</label>
                                <div className="col-sm-7">
                                <input type="number" 
                                id="bonus" 
                                placeholder={bonusMileage} 
                                value={bonus} 
                                onChange={e => setBonus(e.target.value)} 
                                className="form-control" />
                                </div>
                
                            </div>
                                <div className="text-center">
                                    <Link to="/">
                                        <button className="btn btn-secondary mx-2">Cancel</button>
                                    </Link>
                                    <button type="submit"
                                    onClick={() => { 
                                        document.getElementById('settings-alert').classList.remove('d-none');
                                        setMileageRate(mileage);
                                        if (bonus === "") {
                                            addBonusMileage(0.00);
                                        } else {
                                            addBonusMileage(bonus);
                                        }
                                    }}
                                    className="btn btn-outline-success mx-2">Submit</button>
                                </div>

                    </form>

                </div>
            </div>
        </div>
       
    )
}
