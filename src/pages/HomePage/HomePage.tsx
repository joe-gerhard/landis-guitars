import React, { useState, useRef, MutableRefObject } from 'react';
import { Styled } from './styles';
import AboutSection from '../../components/AboutSection';
import Card from '../../components/Card';
import ServicesSection from '../../components/ServicesSection';
import ReviewSection from '../../components/ReviewSection/ReviewSection';
import RepairForm from '../../components/RepairForm';

const HomePage = () => {

  const [ repairFormOpen, setRepairFormOpen ] = useState<boolean>(false);
  const repairFormRef: MutableRefObject<any> = useRef(null);

  const handleClickRepairFormButton = (): void => {
    setRepairFormOpen(!repairFormOpen);

    if(!repairFormOpen) {
      window.scrollTo({
        top: repairFormRef.current.offsetTop,
        behavior: 'smooth',
      })
    }
  }
  
  return (
    <Styled.HomePage>
     <AboutSection />
     <Card>
       <h2>Step 1</h2>
       <p>
        Complete the guitar repair form following the link below.
       </p>
       <button onClick={handleClickRepairFormButton}>Repair Form</button>
     </Card>
     <RepairForm repairFormRef={repairFormRef} open={repairFormOpen}/>
     <Card>
       <h2>Step 2</h2>
       <p>
         We will review your form and give you a call to schedule a 
         complimentary evaluation.
       </p>
     </Card>
     <Card>
       <h2>Step 3</h2>
       <p>
        Bring your guitar in to our shop. We will complete the evaluation 
        in person, talk you through a repair plan and give you a quote. 
        Your baby is safe in our hands. We will call you when it’s ready 
        to be picked up.
       </p>
     </Card>
     <ServicesSection />
     <ReviewSection />
    </Styled.HomePage>
  );
}

export default HomePage;
