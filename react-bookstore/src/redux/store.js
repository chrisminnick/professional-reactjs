function UpdateForm(){
    return (
        <>
        <h1>Click the button to change your address</h1>
        <h2>Your Current Address is:</h2>
        <p>{state.customers.address}</p>
        <button onClick = {
            dispatch({
              type: 'CHANGE_CUSTOMER_ADDRESS',
              payload: '123 Elm Street, Anytown, PA',
            })}>Change My Address</button>
            </>
    )
}

function dispatch(action){
    rootReducer(state, action);
}


function rootReducer(state,action){
    let customerState = customerReducers(state,action)
    let accountState = accountReducers(state,action)
    
    setState(...state,customerState,accountState)
}



    
    function customerReducers (state, action) {
         
        if (action.type === 'CHANGE_CUSTOMER_ADDRESS') {
            
            newState = {...state, customerInfo.address: action.payload}
            return newState
        }

        return state;
    }
}



const initialState = {
  customerInfo: {name: '', address: '123 Elm Street', accountId },
  orders :[
    {
      id:1,
      customer:{id:20,name:"Wilma",address:""},
      items:[{id:10,name:"Toaster",price:20}]
    },
    {
        id:1,
        customer:{id:20,name:"Wilma",address:""},
        items:[{id:10,name:"Toaster",price:20}]
      },
      {
        id:1,
        customer:{id:20,name:"Wilma",address:""},
        items:[{id:10,name:"Toaster",price:20}]
      },
      {
        id:1,
        customer:{id:20,name:"Wilma",address:""},
        items:[{id:10,name:"Toaster",price:20}]
      },
      {
        id:1,
        customer:{id:20,name:"Wilma",address:""},
        items:[{id:10,name:"Toaster",price:20}]
      }
    ]
  
  
  accounts: [
    { accountId: '', typeOfAccout: 'checking'},
    { accountId: '', typeOfAccout: 'savings' },
  ],
};





const store = rootReducer(state, initialState);




setState(newState)