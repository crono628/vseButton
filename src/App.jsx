import { useState } from 'react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import CheckoutModal from './CheckoutModal'
import CheckoutOptions from './CheckoutOptions'
import clipboard from './assets/clipboard2-check.svg'
import { useAppContext } from './AppContext'

function App() {
  const { state, dispatch } = useAppContext()
  const { modalShow, optionShow } = state

  function handleDispatch(actionPayload) {
    dispatch({ type: 'update', payload: actionPayload })
  }

  const handleModals = (e) => {
    const button = e.target.dataset.name
    if (button === 'close') {
      handleDispatch({ modalShow: false, optionShow: false })
    }
    if (button === 'checkout') {
      handleDispatch({ modalShow: true, optionShow: false })
    }
    if (button === 'cancel-options' || button === 'confirm-options') {
      handleDispatch({ optionShow: false, modalShow: true })
    }
    if (button === 'confirm') {
      handleDispatch({ modalShow: false, optionShow: false })
    }
    if (button === 'edit') {
      handleDispatch({ modalShow: false, optionShow: true })
    }
  }
  return (
    <div className="app-container">
      <Button
        data-name="checkout"
        variant="primary"
        size="lg"
        onClick={handleModals}
      >
        <img
          data-name="checkout"
          className="clipboard"
          src={clipboard}
          alt="clipboard"
        />
      </Button>
      <CheckoutModal modalShow={modalShow} handleModal={handleModals} />
      <CheckoutOptions optionShow={optionShow} handleOptions={handleModals} />
    </div>
  )
}

export default App
