import React, { useState } from 'react'
import { Styled } from './styles'
import Indicator from './Indicator';

const ReviewSection = () => {

  const [ indicator, setIndicator ] = useState<number>(0);
  const [ prevScrollPosition, setPrevScrollPosition ] = useState<number>(0);
  const [ ready, setReady ] = useState<boolean>(true);

  const handleScroll: React.EventHandler<React.UIEvent<HTMLDivElement>> = (e): void => {

    const scrollWidth: number = e.currentTarget.scrollWidth;
    const scrollLeft: number = e.currentTarget.scrollLeft;
    const numReviews: number = 3;
    const scrollPosition: number = (scrollLeft / scrollWidth * numReviews);
    const scrollingRight: boolean = scrollPosition > prevScrollPosition; 

    if(ready) {

      if(scrollPosition < 1) {
        scrollingRight ? setIndicator(1) : setIndicator(0);
      }
      else if(scrollPosition < 2 && scrollPosition !== 1) {
        scrollingRight ? setIndicator(2) : setIndicator(1);
      }

      setPrevScrollPosition(scrollPosition);
      setReady(false);

      setTimeout(() => {
        setReady(true);
      }, 100)
    }
  }

  return (
    <Styled.ReviewSection>
      <Styled.ReviewContainer onScroll={handleScroll}>
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
