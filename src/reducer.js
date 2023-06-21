const initialState = {
  modalShow: false,
  optionShow: false,
  checkout: []
}

function stateReducer(state, { type, payload }) {
  switch (type) {
    case 'update': {
      return { ...state, ...payload }
    }
    case 'clear': {
      return { ...initialState }
    }
    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

export { initialState, stateReducer }
