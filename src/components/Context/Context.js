import React,{useReducer} from 'react';

const addItems = (items = [], payload) => {
    const newItems = items.map(item => item);
    // if (!some(items, e => e._id === payload._id)) {
      newItems.push(payload);
    // }
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

let reducer = (state, action) => {
    
    
    switch (action.type) {
      case "onclick":
        return { ...state,
            count: state.count + 1,
            items: addItems(state.items, action.product) };
      default:
        return state;
    }
  };
 

const initialState = {
    count:0,
    items: []

}

const CounterContext = React.createContext(null);

function CounterProvider(props){

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <CounterContext.Provider value={{ state, dispatch }}>
            {props.children}
        </CounterContext.Provider>
    );
}

export { CounterContext, CounterProvider };