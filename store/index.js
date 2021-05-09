export const state = () => ({

    CartItem : 0,
    
  
  })


  export const mutations = {
    addCartToItem(state,payload){

      state.CartItem = payload;
 
    }
  }

