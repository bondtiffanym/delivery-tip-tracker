import React, { createContext, Component } from 'react';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';

export const DeliveryContext = createContext();

class DeliveryContextProvider extends Component {
    state = { 
        deliveries: [
            {
            address: '1138 Lucas Ln',
            id: uuid.v4(),
            tip: 5.00
        }, {
            address: '123 Smith Rd',
            id: uuid.v4(),
            tip: 2.00
        }, {
            address: '456 Rosie Dr',
            id: uuid.v4(),
            tip: 6.00
        }
        ],
        totalTips: 13.00,
     };

     addDelivery = (address, tip) => {
        //creates a new object that will be added to array of deliveries 
        if (address !== "" ) {
            if (tip === "") {
                tip = 0;
            }
        const newDelivery = {
            address,
            id: uuid.v4(),
            tip,
        }
        const newTip = (this.state.totalTips + parseFloat(tip));

        this.setState({deliveries: [...this.state.deliveries, newDelivery], totalTips:newTip});
        this.props.history.push('/');

        } else {
       alert('please fill out forms below');
        }   
       
    }

         
     
     handleSubmit = event => {
         event.preventDefault();
        }

    render() { 
        return ( 
            <DeliveryContext.Provider value={{...this.state, addDelivery:this.addDelivery,
            addTipTotals:this.addTipTotals,
            handleSubmit:this.handleSubmit}}>
                {this.props.children}
            </DeliveryContext.Provider>
         );
    }
}
 
export default withRouter(DeliveryContextProvider);