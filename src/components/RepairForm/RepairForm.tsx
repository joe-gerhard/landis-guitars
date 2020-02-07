import React from 'react'
import { Styled } from './styles'

type RepairFormProps = {
  open: boolean; 
}

const RepairForm : React.FC<RepairFormProps> = ({ open }) => {
  return (
    <Styled.RepairForm open={open}>
      <h2>I'm stoked to help ya out.</h2>
      <p>
        Fill out the form below and we will reach out to find a time 
        that works for you to bring your baby in and talk shop.
      </p>
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Email" />
      <p>
        Give me an idea of what’s going on with your guitar and I will 
        get right back. 
      </p>
      <textarea placeholder="Note"></textarea>
      <button>Send it!</button>
    </Styled.RepairForm>
  )
}

export default RepairForm
