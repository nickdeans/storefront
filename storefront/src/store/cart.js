const initialState = {
    cart: [],
    visible: false
}

export default function cartReducer(state = initialState, action) {
    const {type, payload } = action;

    switch (type) {
        case 'ADD_CART':
            return {...state, cart: [...state.cart, payload]};
        case 'DELETE_CART':
            const cart = [...state.cart];
            let deleteOne = true;
            const newCart = cart.filter((item) => {
                if (item === payload && deleteOne) {
                    deleteOne = false;
                    return false;
                } else { return true; }
            })
            return { ...state, cart: [...newCart]};
        default:
            return state;
    }
}

export function addCart(product) {
    return {
        type: 'ADD_CART',
        payload: product
    }
}

export function deleteCart(product) {
    return {
        type: 'DELETE_CART',
        payload: product
    }
}