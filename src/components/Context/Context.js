import React,{useReducer} from 'react';

  const addItems = (items = [], payload,id) => {
        const newItems =  items.map(item => item);
         newItems.push(payload);
        return newItems;
  };


  const incQuantity = (items = [], id,total,product)=>{
    const newItems = items.map(item => item);
    const isOnTheList = !newItems.includes(id)
    if(isOnTheList){
      newItems.map((e)=> { return e.id === id ? (e.quantity= e.quantity + 1) : ' ' })
    }
    return newItems
  }

  const newCount = (list) =>{
    return list.length;
  }

  const decQuantity = (items = [],id)=>{
    const newItems = items.map(item => item);
    newItems.map((e,index)=>{ return e.id === id && e.quantity >= 2 ? e.quantity = e.quantity - 1 
                                      : (e.id === id && (e.quantity === 0 || e.quantity === 1)) ? newItems.splice(index,1) 
                                      : ' '
    });
    return newItems
  }

  const cartTotal = (items = [], payload, id)=>{
    const newItems = items.map(item => item);
    newItems.push(payload);
    const newValue =  newItems.map(item => item.price).reduce((prev, next) => prev + next);
    return newValue
  }
  
  const decItemsTotal = (items= [],id,total)=>{
    const newItems = items.map(item => item);
    const subValue = newItems.map(e=>{return e.id ===id ? e.price: 0});
    const newSub = total - subValue.find(e=>e>1);
    return newSub;
  }

  const incItemsTotal = (items=[],id,total)=>{
    const newItems = items.map(item => item);
    const checkQuan = newItems.map(e=>{return (e.id===id &&e.quantity>1) ? (total = total + e.price) : 0})
    return total
  }


let reducer = (state, action) => {

    switch (action.type) {
      case "onclick_cart":
        return { ...state,
            count: state.count + 1,
            items: addItems(state.items, action.product,action.id) ,
            total: cartTotal(state.items, action.product, action.id)};
      case "onclick_plus":
        return{...state,
          items: incQuantity(state.items,action.id),
          total:incItemsTotal(state.items,action.id,state.total)
        };
      case "onclick_minus":
        console.log("state.total",state.total)
        console.log("sub",state.total - state.items.price)

       

        return{...state,
          count: newCount(state.items),
          items: decQuantity(state.items,action.id),
          total: decItemsTotal(state.items,action.id,state.total)
        };
      default:
        return state;
    }
  };
 

const initialState = {
    count:0,
    items: [],
    total:0
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