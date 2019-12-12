import React, { createContext, Component } from 'react';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';

export const DeliveryContext = createContext();

class DeliveryContextProvider extends Component {
    state = { 
        deliveries: [],
        totalTips: 0.00,
        mileageRate: 0.00,
        bonusMileage: 0.00,
        selectedDelivery: "",
     };

     addDelivery = (address, tip) => {
        //if value for address input field is empty, activates an alert
        if (address !== "" ) {
        //if tip input value is left empty, tip value becomes 0
            if (tip === "") {
                tip = 0;
            }
        //creates a new object to be added to the array of deliveries in the state
        const newDelivery = {
            address,
            id: uuid.v4(),
            tip,
        }
        
       

        this.setState({deliveries: [...this.state.deliveries, newDelivery]});
        /* redirects to main page - must import 'withRouter' from react-router-dom and encase the exported component value below e.g, 
        export default withRouter(DeliveryContextProvider) in order for these react router props to be available within this context */
        this.props.history.push('/');
        //handles updating the tip and mileage within the state as each delivery is added
        this.addTip(tip);

        } else {
       document.getElementById('add-delivery-alert').classList.remove('d-none');
        }   
       
    }

    addTip = (tip) => {
        const newTip = (this.state.totalTips + parseFloat(tip));

        this.setState({totalTips:newTip});
    }

    addBonusMileage = (bonus) => {

        this.setState({bonusMileage: bonus})
    }

    setMileageRate = (mileage) => {
        this.setState({mileageRate: mileage});
    }

    setSelectedDelivery = (id) => {
        this.setState({selectedDelivery: id}, () => console.log(this.state.selectedDelivery));
    }
    deleteDelivery = (id) => {
       let deliveryList = [...this.state.deliveries];
       let newDeliveryList = deliveryList.filter( i => i.id !== id ); 

       this.setState({deliveries: [...newDeliveryList]})
    }
    clearAllDeliveries = () => {
        this.setState({deliveries: [], totalTips: 0 })
    }




     handleSubmit = event => {
         event.preventDefault();
        }

    render() { 
        return ( 
            <DeliveryContext.Provider value={{...this.state, addDelivery:this.addDelivery,
            addTipTotals:this.addTipTotals,
            handleSubmit:this.handleSubmit,
            addTip:this.addTip,
            setMileageRate: this.setMileageRate,
            addBonusMileage: this.addBonusMileage,
            setSelectedDelivery: this.setSelectedDelivery,
            deleteDelivery: this.deleteDelivery,
            clearAllDeliveries: this.clearAllDeliveries}}>
                {this.props.children}
            </DeliveryContext.Provider>
         );
    }
}
 
export default withRouter(DeliveryContextProvider);