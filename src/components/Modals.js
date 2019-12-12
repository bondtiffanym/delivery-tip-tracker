import React, { useContext } from 'react';
import { DeliveryContext } from '../Context';

export default function Modals() {
    const {  selectedDelivery, setSelectedDelivery, deleteDelivery, clearAllDeliveries } = useContext(DeliveryContext);
    return (
        <>
        {/* -------------- Delete Single Delivery Modal -------------- */}
        <div id="delete-modal" className="modal fade">
	<div className="modal-dialog text-center">
		<div className="modal-content">
			<div className="modal-header d-block text-center">
                <button type="button" 
                className="close pb-0" 
                data-dismiss="modal" 
                aria-hidden="true" 
                onClick={() => {setSelectedDelivery("");}}>&times;</button>
                <br></br>
				<div className="text-center d-inline-block">
					<i className="far fa-times-circle fa-4x pb-2 mx-auto text-danger d-4"></i>
				</div>				
				<h4 className="modal-title">Are you sure?</h4>	
			</div>
			<div className="modal-body">
				<p>Do you really want to delete this delivery? This action can't be undone.</p>
			</div>
			<div className="modal-footer">
                <button type="button"  
                className="btn btn-secondary" 
                onClick={() => {setSelectedDelivery("");}}>Cancel</button>
                <button type="button" 
                data-dismiss="modal" 
                onClick={() => {console.log(selectedDelivery.id)}}
                className="btn btn-danger">Delete</button>
			</div>
		</div>
	</div>
</div>   

{/* ------------------------ Clear All Deliveries Modal ------------------ */}

<div id="clear-all-modal" className="modal fade">
	<div className="modal-dialog text-center">
		<div className="modal-content">
			<div className="modal-header d-block text-center">
                <button type="button" 
                className="close pb-0" 
                data-dismiss="modal" 
                aria-hidden="true" 
                onClick={() => {setSelectedDelivery("");}}>&times;</button>
                <br />
				<div className="text-center d-inline-block">
					<i className="far fa-times-circle fa-4x pb-2 mx-auto text-danger d-4"></i>
				</div>				
				<h4 className="modal-title">Are you sure?</h4>	
			</div>
			<div className="modal-body">
				<p>Do you really want to clear all deliveries? This action can't be undone.</p>
			</div>
			<div className="modal-footer">
                <button type="button" 
                data-dismiss="modal" 
                className="btn btn-secondary"
                onClick={() => {setSelectedDelivery("");}}>Cancel</button>
                <button type="button" 
                data-dismiss="modal" 
                onClick={clearAllDeliveries}
                className="btn btn-danger">Clear All</button>
			</div>
		</div>
	</div>
</div>  

</>

    )

}
