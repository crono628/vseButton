const initialState = {
  modalShow: false,
  optionShow: false,
  checkout: [],
  rtc: '',
  selectedRtcOption: '',
  injections: [
    { name: 'Influenza', key: 'influenza', checked: false },
    { name: 'Shingrix 1', key: 'shingrix1', checked: false },
    { name: 'Shingrix 2', key: 'shingrix2', checked: false },
    { name: 'Pneumovax', key: 'pneumovax', checked: false },
    { name: 'COVID', key: 'covid', checked: false },
    { name: 'Prevnar', key: 'prevnar', checked: false },
    { name: 'PPD', key: 'ppd', checked: false },
    { name: 'Gardasil', key: 'gardasil', checked: false },
    { name: 'Twinrix', key: 'twinrix', checked: false },
    { name: 'Hep A', key: 'hepA', checked: false },
    { name: 'Hep B', key: 'hepB', checked: false },
    { name: 'Tdap', key: 'tdap', checked: false },
    { name: 'B12', key: 'b12', checked: false },
    { name: 'TD', key: 'td', checked: false }
  ],
  requestRecords: false,
  recordsRequested: {
    provider: '',
    organization: '',
    dates: '',
    type: '',
    officeNumber: '',
    faxNumber: ''
  },
  ordersEntered: false,
  today: [
    { name: 'Labs', key: 'labs', checked: false },
    { name: 'X-Rays', key: 'xrays', checked: false },
    { name: 'EKG', key: 'ekg', checked: false },
    {
      name: 'Compression Stocking Measurment',
      key: 'stockings',
      checked: false
    }
  ]
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
