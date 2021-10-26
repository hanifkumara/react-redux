import { createStore } from 'redux'

const initialState = {
  products: [
    {
      id: 1,
      name: 'Bakso Bakar'
    },
    {
      id: 2,
      name: 'Nasi Goreng'
    }
  ],
  profile: {
    first_name: "Hanif",
    last_name: "Kumara"
  }
}

const reducer = (state= initialState, action) => {
  if(action.type === 'SET_PRODUCT') {
    return {
      ...state.products
    }
  } else {
    return state
  }
}

const store = createStore(reducer)

export default store
