// From ecommerce project
export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log("action from reducer: ", action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                // returning the state
                ...state,
                // overwriting the value of basket with new value
                basket: [...state.basket, action.item],
            };
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket

            // copying the basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as it's not in the basket`);
            }

            /* Set the state, and update the basket as newBasket so that
            the 'REMOVE_FROM_BASKET' action works */
            return { ...state, basket: newBasket }
            break;
        default:
            return state;
    }
}

export default reducer;