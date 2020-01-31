import React from 'react'
import { Styled } from './styles'
import HeaderSection from '../AboutSection'
import ServicesSection from '../ServicesSection'
import SocialLinksSection from '../SocialLinksSection'
import ReviewsSection from '../ReviewsSection'

const MainDisplay: React.FC = () => {
  return (
    <Styled.MainDisplay>
      <HeaderSection />
      <ServicesSection/>
      <SocialLinksSection />
      <ReviewsSection />
    </Styled.MainDisplay>
  )
}

export default MainDisplay;
