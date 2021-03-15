
export const SET_GAMES=(state,games)=>{
    state.games=games;
}
export const SET_GAME=(state,game_prices)=>{
    state.game_prices=game_prices;
}

export const SET_GAME_DETAILS=(state,game_details)=>{
    state.game_details=game_details;
}

export const ADD_TO_CART=(state, {product, quantity})=>{
     let found = state.cart.find(item => {
         return item.product.product_id === product.product_id
     });
     if(found){
         found.quantity+=quantity;
         window.localStorage.setItem('cart', JSON.stringify(state.cart));
         console.log(state.cart);
         return;
     }
     state.cart.push({product,quantity});
         window.localStorage.setItem('cart', JSON.stringify(state.cart));
         console.log(state.cart);
}

export const REMOVE_CART_ITEM=(state,product_id)=>{
   // var cart = [...state.cart];
    let cart = [...state.cart];
    cart = cart.filter(item => {
        return  item.product.product_id != product_id;
    });
       state.cart=[...cart];
       console.log("filter:"+ cart);
       console.log("state:"+state.cart);
       window.localStorage.setItem('cart', JSON.stringify(state.cart));
}
