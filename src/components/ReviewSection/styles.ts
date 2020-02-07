import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type ReviewSectionProps = {
  theme: Theme;
}

const ReviewSection = styled('section')<ReviewSectionProps>(({ theme }) => css`
  display: flex;
  flex-direction: column;
  background: #343434;
  height: 225px;
  color: white;
  padding: 17px;
  padding-top: 24px;

  p {
    font-size: 20px;
  }

  span {
    margin-top: 20px;
    font-size: 12px;
  }
`);

export const Styled = {
  ReviewSection,
}