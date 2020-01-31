import React from 'react'
import { Styled } from './styles'
import HeaderSection from '../AboutSection'
import ServicesSection from '../ServicesSection'
import SocialLinksSection from '../SocialLinksSection'
import ReviewsSection from '../ReviewsSection'
import OtherEventsSection from '../OtherEventsSection'

const MainDisplay: React.FC = () => {
  return (
    <Styled.MainDisplay>
      <HeaderSection />
      <ServicesSection/>
      <SocialLinksSection />
      <ReviewsSection />
      <OtherEventsSection />
    </Styled.MainDisplay>
  )
}

export default MainDisplay;
