import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useAppContext } from '../AppContext'
const VaccineForm = () => {
  const { state, dispatch } = useAppContext()
  const { vaccineList } = state

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target
    dispatch({
      type: 'update',
      payload: { vaccineList: { ...vaccineList, [name]: checked } }
    })
  }

  return (
    <Container>
      <Form>
        <Form.Group>
          <Row>
            <Col>
              <Form.Check
                type="checkbox"
                label="Influenza"
                name="influenza"
                checked={vaccineList.influenza}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="Shingrix 1"
                name="shingrix1"
                checked={vaccineList.shingrix1}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="Shingrix 2"
                name="shingrix2"
                checked={vaccineList.shingrix2}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="Pneumovax"
                name="pneumovax"
                checked={vaccineList.pneumovax}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="COVID Vaccine"
                name="covidVaccine"
                checked={vaccineList.covidVaccine}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="Prevnar"
                name="prevnar"
                checked={vaccineList.prevnar}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="PPD"
                name="ppd"
                checked={vaccineList.ppd}
                onChange={handleCheckboxChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                label="Gardasil"
                name="gardasil"
                checked={vaccineList.gardasil}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="Twinrix"
                name="twinrix"
                checked={vaccineList.twinrix}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="Hep A"
                name="hepA"
                checked={vaccineList.hepA}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="Hep B"
                name="hepB"
                checked={vaccineList.hepB}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="Tdap"
                name="tdap"
                checked={vaccineList.tdap}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="B12"
                name="b12"
                checked={vaccineList.b12}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                type="checkbox"
                label="TD"
                name="td"
                checked={vaccineList.td}
                onChange={handleCheckboxChange}
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default VaccineForm
