import React,{useReducer} from 'react';

    const addItems = (items = [], payload,id) => {
        const newItems =  items.map(item => item);
         newItems.push(payload);
        return newItems;
    };


  const addQuantity = (items = [], id)=>{
    const newItems = items.map(item => item);
    const isOnTheList = !newItems.includes(id)
    
    if(isOnTheList){
      newItems.map((e)=> { return e.id === id ? e.quantity= e.quantity + 1 : ' ' })
    }
    return newItems
  }

  const removeQuantity = (items = [],id)=>{
    const newItems = items.map(item => item);
    newItems.map(((e,index)=>{ return e.id === id && e.quantity >= 2 ? e.quantity = e.quantity - 1 
                                      : (e.id === id && (e.quantity === 0 || e.quantity === 1)) ? newItems.splice(index,1) 
                                      : ' '
        // if(e.id === id && e.quantity >= 1){
        //     e.quantity = e.quantity - 1;
        // }

        // if(e.quantity === 0){
        //   const newList = newItems.splice(index,1)
        //   return newList
        // }
    }))
    
    return newItems
  }

  
let reducer = (state, action) => {

    switch (action.type) {
      case "onclick_cart":
        return { ...state,
            count: state.count + 1,
            items: addItems(state.items, action.product,action.id) };
      case "onclick_plus":
        return{...state,
          items: addQuantity(state.items,action.id)
        };
      case "onclick_minus":
        return{...state,
          items: removeQuantity(state.items,action.id)
        };
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