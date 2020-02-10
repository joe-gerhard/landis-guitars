import React, { useState } from 'react'
import { Styled } from './styles'
import firebase from '../../util/firebase'

type RepairFormProps = {
  open: boolean; 
}

type RepairFormState = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  note: string;
}

const InitialRepairFormState: RepairFormState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  note: '',
}

const RepairForm : React.FC<RepairFormProps> = ({ open }) => {
  
  const [ formState, setFormState ] = useState<RepairFormState>(InitialRepairFormState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
    
  }

  const handleSubmitFormData = (): void => {
    const db = firebase.firestore();
    // console.log(db)

    db.collection('messages').add(formState)
    .then(onfulfilled => {
      console.log(onfulfilled.id)
    })
    .catch(onrejected => {
      console.log(onrejected)
    })

    // db.collection('messages').get()
    // .then(query => {
    //   query.forEach(doc => {
    //     console.log(doc.data)
    //   })
    // })
    // .catch(err => {
    //   console.log(err.message);
    // })

    setFormState(InitialRepairFormState);

  }

  return (
    <Styled.RepairForm open={open}>
      <h2>I'm stoked to help ya out.</h2>
      <p>
        Fill out the form below and we will reach out to find a time 
        that works for you to bring your baby in and talk shop.
      </p>
      <input name="firstName" value={formState.firstName} type="text" placeholder="First name" onChange={handleChange} />
      <input name="lastName" value={formState.lastName} type="text" placeholder="Last name" onChange={handleChange} />
      <input name="phoneNumber" value={formState.phoneNumber} type="text" placeholder="Phone" onChange={handleChange} />
      <input name="email" value={formState.email} type="text" placeholder="Email" onChange={handleChange} />
      <p>
        Give me an idea of what’s going on with your guitar and I will 
        get right back. 
      </p>
      <textarea name="note" value={formState.note} placeholder="Note" onChange={handleChange}></textarea>
      <button onClick={handleSubmitFormData}>Send it!</button>
    </Styled.RepairForm>
  )
}

export default RepairForm
