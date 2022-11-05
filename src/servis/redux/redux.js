import ADD_CART from "../../contenare/contenar"
 const  INIT_STATE = {
    carts: []
}
 const cartre =(state = INIT_STATE, action)=>{
    switch(action.type){
        case ADD_CART :
            return{
                ...state,
                carts: [...state.carts,action.data]
            }
            default :
            return state
    }
}
export default cartre;