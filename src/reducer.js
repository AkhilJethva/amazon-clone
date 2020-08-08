export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) =>{
    const x = basket.reduce((amount, item) => item.price + amount, 0);
    return(x);
}

function reducer(state, action){
  
    switch(action.type){
        case "SER_USER":
            return{
                ...state,
                user: action.user,
            };

        case "ADD_TO_BASKET":
            //code
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            
        
        case "REMOVE_FROM_BASKET":
            //code
            let newBasket = [...state.basket];
           
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.item.id
            );
            console.log(index);
            if(index >= 0)
            {
                newBasket.splice(index,1);

            }else{}
            return {
                ...state,
                basket: newBasket,
            };
                    
        default:
            return state;
    }
}

export default reducer;