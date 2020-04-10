import React,{useReducer} from 'react';

const addItems = (items = [], payload) => {
    const newItems = items.map(item => item);
       newItems.push(payload);
    return newItems;
};

const removeItem = (items = [], id) => {
    const newItems = items.map(item => item);
    newItems.every((e, index) => {
      if (e._id === id) {
        newItems.splice(index, 1);
        return false;
      }
      return true;
    });
    return newItems;
  };

  const addQuantity = (items = [], id)=>{
    const newItems = items.map(item => item);
    const isOnTheList = !newItems.includes(id)
    
    if(isOnTheList){
      newItems.map((e,index)=>{
                              if(e.id === id){
                                e.quantity= e.quantity+1
                              }
                            })
    }
    
    
    return newItems
  }


let reducer = (state, action) => {

    switch (action.type) {
      case "onclick_cart":
        return { ...state,
            count: state.count + 1,
            items: addItems(state.items, action.product) };
      case "onclick_plus":
        return{...state,
          items: addQuantity(state.items,action.id)
        }
      default:
        return state;
    }
  };
 

const initialState = {
    count:0,
    items: [],
}

const CounterContext = React.createContext(null);

function CounterProvider(props){

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
    return(
        <CounterContext.Provider value={{ state, dispatch }}>
            {props.children}
        </CounterContext.Provider>
    );
}

export { CounterContext, CounterProvider };