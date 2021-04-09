const initialState = {
    cart: [],
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

export function addCart(name) {
    return {
        type: 'ADD_CART',
        payload: name,
    }
}

export function deleteCart(name) {
    return {
        type: 'DELETE_CART',
        payload: name
    }
}