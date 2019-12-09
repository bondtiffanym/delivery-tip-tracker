import React, { createContext, Component } from 'react';
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
        const newDelivery = {
            address,
            id: uuid.v4(),
            tip,
        }
        const newTip = (this.state.totalTips + parseFloat(tip));

        this.setState({deliveries: [...this.state.deliveries, newDelivery], totalTips:newTip});
       
     }

     addTipTotals = () => {
         let total = 0;
         this.state.deliveries.map(delivery => (total += delivery.tip));
         this.setState(() => {
             return {
                 totalTips: total
             }
         })
         
     }


    render() { 
        return ( 
            <DeliveryContext.Provider value={{...this.state, addDelivery:this.addDelivery,
            addTipTotals:this.addTipTotals}}>
                {this.props.children}
            </DeliveryContext.Provider>
         );
    }
}
 
export default DeliveryContextProvider;