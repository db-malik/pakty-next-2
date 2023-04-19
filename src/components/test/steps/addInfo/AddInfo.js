import React, { useState } from 'react'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Top = styled.div`
  display: flex;
  gap: 20px;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 278px;
  left: 137px;
  top: 579px;
  overflow: scroll;
  background: #ffffff;
  border-radius: 8px;
`
const PhoneInputContainer = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  list-style-type: circle;
  align-items: center;
  border: 1px solid gray;
  padding-left: 20px;
`
const Adress = styled.input`
  flex: 1;
  font-size: 14px;
  line-height: 130%;
  color: #8095a6;
  opacity: 0.8;
  border-radius: 8px;
  background: #ffffff;
  padding-left: 20px;
  height: 54px;
`
const AddInfo = () => {
  const [value, setValue] = useState()
  return (
    <Container>
      <Top>
        <Adress className="address" type="input" placeholder="Adress" />
        <PhoneInputContainer>
          <PhoneInput
            placeholder="11111111"
            value={value}
            defaultCountry="TN"
            onChange={setValue}
          />
        </PhoneInputContainer>
      </Top>

      <Textarea rows="24" cols="100"></Textarea>
    </Container>
  )
}

export default AddInfo
