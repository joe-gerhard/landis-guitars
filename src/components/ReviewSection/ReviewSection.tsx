import React, { useRef, useState } from 'react'
import { Styled } from './styles'
import Indicator from './Indicator';
import { throttle } from '../../util/helpers';

const ReviewSection = () => {

  const [ indicator, setIndicator ] = useState<number>(0);
  const reviewRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  const handleScroll: React.EventHandler<React.UIEvent<HTMLDivElement>> = (e): void => {

    if(reviewRef.current) {

      const scrollWidth: number = reviewRef.current.scrollWidth;
      const scrollLeft: number = reviewRef.current.scrollLeft;
      const numReviews: number = 3
      const scrollPosition: number = (scrollLeft / scrollWidth * numReviews);

      if(scrollPosition > 1.5) {
        setIndicator(2)
      }
      else if(scrollPosition > .5) {
        setIndicator(1)
      }
      else {
        setIndicator(0)
      }
    }
  }

  return (
    <Styled.ReviewSection>
      <Styled.ReviewContainer ref={reviewRef} onScroll={throttle(handleScroll, 100)}>
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
