let initialState = {
    activeCategory: '',
    activeDescription: '',
    categories: [
        { name: "Electronics", description: "electronic toys" },
        { name: "Food", description: "food you can eat" }
    ]
}

export default function CategoryReducer(state = initialState, action) {
    let { type, payload } = action;

    switch (type) {
        case "SWITCH_CATEGORY":
            return initialState;
        case "SWITCH_CATEGORY_TWO":
            return {...state, activeCategory: payload.category, activeDescription: payload.description};
        default:
                return state;
    }
}

export function switchCategory() {
    return {
        type: "SWITCH_CATEGORY",
    };
}

export function switchCategoryTwo(category, description) {
    return {
        type: "SWITCH_CATEGORY_TWO",
        payload: {
            category,
            description
        }
    };
}
