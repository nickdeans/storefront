let initialState = {
    categories: [
        { name: "Electronics", },
        { name: "Food"}
    ]
}
let  categories;

export default function CategoryReducer(state = initialState, action) {
    let { type, payload } = action;

    switch (type) {
        case "SWITCH_CATEGORY":

            categories = state.categories.map(category => {
                if (category.name === payload) {
                    return { name: category.name }
                }
                return category;
            });

            return { categories: categories }
            default:
                return state;
    }
}

export function switchCategory(name) {
    return {
        type: "SWITCH_CATEGORY",
        payload: name,
    }
}

