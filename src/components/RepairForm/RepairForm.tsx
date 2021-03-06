import React, { useState, ChangeEvent, MutableRefObject } from 'react'
import { Styled } from './styles'
import { db } from '../../util/firebase'
import Error from './Error';

type RepairFormProps = {
  open: boolean; 
  repairFormRef: MutableRefObject<null>;
}

type RepairFormState = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  note: string;
  date: string;
}

type RepairFormErrors = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const initialRepairFormState: RepairFormState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  note: '',
  date: '',
}

const initialRepairFormErrors: RepairFormErrors = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
}

const RepairForm : React.FC<RepairFormProps> = ({ open, repairFormRef }) => {
  
  const [ formState, setFormState ] = useState<RepairFormState>(initialRepairFormState)
  const [ errors, setErrors ] = useState<RepairFormErrors>(initialRepairFormErrors)
  const [ sent, setSent ] = useState<boolean>(false);
  const [ height, setHeight ] = useState<number | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
    
  }

  const normalizeInput = (value: string, previousValue: string): string => {
    
    // only allows 0-9 inputs
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length; 
  
    if (!previousValue || value.length > previousValue.length) {
  
      // returns: "x", "xx", "xxx"
      if (cvLength < 4) return currentValue; 
  
      // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
      if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`; 
  
      // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`; 
    }

    return value;
  };

  const handleChangePhoneNumber: React.EventHandler<ChangeEvent<HTMLInputElement>> = ({ target: { value }}): void => {

    const prevValue = formState.phoneNumber;

    setFormState({
      ...formState,
      phoneNumber: normalizeInput(value, prevValue)
    })
  }

  const validateName = (value: string): string => {
    let error = ''

    if(!value) error = 'Required!'

    return error;
  }

  const validatePhoneNumber = (value: string): string => {
    let error = ''
    
    if (!value) error = 'Required!'
    else if (value.length !== 14) error = 'Invalid phone format. ex: (555) 555-5555';
    
    return error;
  };

  const validateEmail = (value: string): string => {
    let error = '';
    let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!value) error = 'Required!'
    else if(!value.match(emailRegEx)) error = 'Invalid email format. ex: John.Doe@gmail.com'
    
    return error;
  }

  const isFormValid = (): boolean => {

    let tempErrors = {
      ...errors,
      firstName: validateName(formState.firstName),
      lastName: validateName(formState.lastName),
      phoneNumber: validatePhoneNumber(formState.phoneNumber),
      email: validateEmail(formState.email),
    }

    setErrors(tempErrors);
    
    return !(tempErrors.phoneNumber || tempErrors.firstName || tempErrors.lastName || tempErrors.email)
  }

  const handleSubmitFormData = (): void => {
    
    if(isFormValid()) {

      db.collection('messages').add({
        ...formState,
        date: new Date().toLocaleString()
      })

      setSent(true);
      setHeight(150);
      setFormState({
        ...formState,
        note: ''
      });
    }
  }

  const handleSendAnotherMessage = (): void => {
    setHeight(undefined);
    setSent(false);
  }

  return (
    <Styled.RepairForm ref={repairFormRef} open={open} height={height}>
      {sent ? 
        <>
          <h2>Thanks! I'll get back to you soon!</h2>
          <button onClick={handleSendAnotherMessage}>Send Another Message</button>
        </>
      :
      <>
        <h2>I'm stoked to help ya out.</h2>
        <p>
          Fill out the form below and we will reach out to find a time 
          that works for you to bring your baby in and talk shop.
        </p>
        <input name="firstName" value={formState.firstName} type="text" placeholder="First name" onChange={handleChange} />
        <Error error={errors.firstName} />
        <input name="lastName" value={formState.lastName} type="text" placeholder="Last name" onChange={handleChange} />
        <Error error={errors.lastName} />
        <input name="phoneNumber" value={formState.phoneNumber} type="text" placeholder="Phone" onChange={handleChangePhoneNumber} />
        <Error error={errors.phoneNumber} />
        <input name="email" value={formState.email} type="text" placeholder="Email" onChange={handleChange} />
        <Error error={errors.email} />
        <p>
          Give me an idea of what’s going on with your guitar and I will 
          get right back. 
        </p>
        <textarea name="note" value={formState.note} placeholder="Note" onChange={handleChange}></textarea>
        <button onClick={handleSubmitFormData}>Send it!</button>
      </>
      }
    </Styled.RepairForm>
  )
}

export default RepairForm

