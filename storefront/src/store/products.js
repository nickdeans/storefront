const initialState = {
    productList: [
      {
        name: '1TB USB',
        category: 'Electronics',
      },
      {
        name: 'Monitor',
        category: 'Electronics',
      },
      {
        name: 'Mouse',
        category: 'Electronics',
      },
      {
        name: 'Keyboard',
        category: 'Electronics',

      },
      {
        name: 'TV',
        category: 'Electronics',
      },
      {
        name: 'Apples',
        category: 'Food',
      },
      {
        name: 'Calzones',
        category: 'Food',
      },
    ],
    productName: {name: 'Electronic'},
    activeProduct: ''
  }
  
  export default function productReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case "SWITCH_CATEGORY_TWO":
        const products = getProducts(payload.category);
        return { ...state, products: products };
      default:
        return state;
    }
  }
  
  export function getProducts(category) {
    const products = initialState.productList;
    const filteredProducts = products.filter(product => product.category === category);
    return filteredProducts;
  }