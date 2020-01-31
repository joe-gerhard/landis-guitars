import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ReviewsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  div {
    display: flex;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: ${theme.light};

  img {
    width: 80%;
    object-fit: scale-down;
  }
`;

const Review = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 40px;
`;
 
export const Styled = {
  ReviewsSection,
  ImageContainer,
  Review,
}