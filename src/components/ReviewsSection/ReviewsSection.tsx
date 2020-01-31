
import React from 'react'
import { Styled } from './styles';

const ReviewsSection: React.FC = () => {
  return (
    <Styled.ReviewsSection>
      <h1>Reviews</h1>
      <div>
        <Styled.ImageContainer>
          <img src="#" alt=""/>
        </Styled.ImageContainer>
        <Styled.Review>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis, hic quam possimus repudiandae repellat animi laboriosam, 
            vel natus assumenda laborum placeat! Ad est dicta explicabo itaque 
            amet necessitatibus ex quas!
          </p>
        </Styled.Review>
      </div>
    </Styled.ReviewsSection>
  )
}

export default ReviewsSection;
