const initialState = {
  modalShow: false,
  optionShow: false,
  checkout: [],
  rtc: '',
  vaccineList: {
    influenza: false,
    shingrix1: false,
    shingrix2: false,
    pneumovax: false,
    covidVaccine: false,
    prevnar: false,
    ppd: false,
    gardasil: false,
    twinrix: false,
    hepA: false,
    hepB: false,
    tdap: false,
    b12: false,
    td: false
  },
  requestRecords: false,
  recordsRequested: {
    provider: '',
    organization: '',
    dates: '',
    type: '',
    officeNumber: '',
    faxNumber: ''
  },
  ordersEntered: false
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
