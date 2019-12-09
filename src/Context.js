import React, { createContext, Component } from 'react';

export const DeliveryContext = createContext();

class DeliveryContextProvider extends Component {
    state = { 
        initialDeliveries: [
            { address: "123 Smith Ln", 
              tip: 3.00,
              id: 1 },
            { address: "315 Park Ave",
              tip: 5.00,
              id: 2 },
              { address: "1138 Lucas Ln",
                tip: 4.50,
                id: 3 }
          ]
     };


    render() { 
        return ( 
            <DeliveryContext.Provider value={{...this.state}}>
                {this.props.children}
            </DeliveryContext.Provider>
         );
    }
}
 
export default DeliveryContextProvider;