import React, { useRef, useState } from 'react'
import { Styled } from './styles'
import Indicator from './Indicator';

const ReviewSection = () => {

  const [ indicator, setIndicator ] = useState<number>(0);
  const reviewRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  const handleScroll: React.EventHandler<React.UIEvent<HTMLDivElement>> = (e): void => {

    if(reviewRef.current) {
      const scrollWidth: number = reviewRef.current.scrollWidth;
      const scrollLeft: number = reviewRef.current.scrollLeft;
      const numReviews: number = 3
      const scrollPosition: number = (scrollLeft / scrollWidth * numReviews);

      switch(scrollPosition) {
        case 0: setIndicator(0); break;
        case 1: setIndicator(1); break;
        case 2: setIndicator(2); break;
        default: break;
      }
    }
    

  }

  return (
    <Styled.ReviewSection>
      <Styled.ReviewContainer ref={reviewRef} onScroll={handleScroll}>
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
      </Styled.ReviewContainer>
      <Indicator indicator={indicator}/>
    </Styled.ReviewSection>
  )
}

export default ReviewSection
