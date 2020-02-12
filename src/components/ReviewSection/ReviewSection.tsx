import React from 'react'
import { Styled } from './styles'
import Indicator from './Indicator';

const ReviewSection = () => {
  return (
    <>
    <Styled.ReviewSection>
      <Styled.Review>
        <p>
          “Great work and fast turn around! Best guitar set up I’ve 
          had in Austin! Landis Guitars is a true asset, highly recommended!”
        </p>
        <span>Adam B.</span>
      </Styled.Review>
      <Styled.Review>
        <p>
          “Great work and fast turn around! Best guitar set up I’ve 
          had in Austin! Landis Guitars is a true asset, highly recommended!”
        </p>
        <span>Adam B.</span>
      </Styled.Review>
      <Styled.Review>
        <p>
          “Great work and fast turn around! Best guitar set up I’ve 
          had in Austin! Landis Guitars is a true asset, highly recommended!”
        </p>
        <span>Adam B.</span>
      </Styled.Review>
    </Styled.ReviewSection>
    <Indicator />
    </>
  )
}

export default ReviewSection
