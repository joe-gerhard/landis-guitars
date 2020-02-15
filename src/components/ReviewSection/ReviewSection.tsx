import React, { useRef, useState } from 'react'
import { Styled } from './styles'
import Indicator from './Indicator';
import { throttle } from '../../util/helpers';

const ReviewSection = () => {

  const [ indicator, setIndicator ] = useState<number>(0);
  const [ prevScrollPosition, setPrevScrollPosition ] = useState<number>(0);
  const reviewRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  const handleScroll: React.EventHandler<React.UIEvent<HTMLDivElement>> = (): void => {

    if(reviewRef.current) {

      const scrollWidth: number = reviewRef.current.scrollWidth;
      const scrollLeft: number = reviewRef.current.scrollLeft;
      const numReviews: number = 3
      const scrollPosition: number = (scrollLeft / scrollWidth * numReviews);
      const scrollingRight: boolean = scrollPosition > prevScrollPosition; 

      if(scrollPosition < 1) {
        scrollingRight ? setIndicator(1) : setIndicator(0);
      }
      else if(scrollPosition < 2 && scrollPosition !== 1) {
        scrollingRight ? setIndicator(2) : setIndicator(1);
      }

      setPrevScrollPosition(scrollPosition);
    }
  }

  return (
    <Styled.ReviewSection>
      <Styled.ReviewContainer ref={reviewRef} onScroll={throttle(handleScroll, 200)}>
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
