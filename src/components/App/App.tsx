import React, { useState } from 'react';
import { Styled } from './styles';
import Header from '../Header';
import MenuBar from '../MenuBar';
import AboutSection from '../AboutSection';
import Card from '../Card';
import ServicesSection from '../ServicesSection';
import ReviewSection from '../ReviewSection/ReviewSection';
import Footer from '../Footer';
import RepairForm from '../RepairForm';

const App = () => {

  const [ repairFormOpen, setRepairFormOpen ] = useState<boolean>(false);
  
  return (
    <Styled.App>
     <Header />
     <MenuBar />
     <AboutSection />
     <Card>
       <h2>Step 1</h2>
       <p>
        Complete the guitar repair form following the link below.
       </p>
       <button onClick={() => setRepairFormOpen(!repairFormOpen)}>Repair Form</button>
     </Card>
     <RepairForm open={repairFormOpen}/>
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
     <Footer />
    </Styled.App>
  );
}

export default App;
