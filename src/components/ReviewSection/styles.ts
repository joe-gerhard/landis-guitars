import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type ReviewSectionProps = {
  theme: Theme;
}

const ReviewSection = styled('section')<ReviewSectionProps>(({ theme }) => css`
  display: flex;
  overflow-x: scroll;
  background: #343434;
  scroll-snap-type: x mandatory;

`);

const Review = styled('div')<ReviewSectionProps>(({ theme }) => css`
  display: flex;
  flex-direction: column;
  height: 225px;
  color: white;
  padding: 17px;
  padding-top: 24px;
  min-width: 100vw;
  scroll-snap-align: center;

  p {
    font-size: 20px;
  }

  span {
    margin-top: 20px;
    font-size: 12px;
  }
`);

const Indicator = styled('div')<ReviewSectionProps>(({ theme }) => css`
  background: #343434;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 6px;
    height: 6px;
    margin: 2px;
    background: white;
    border-radius: 100%;
  }
`);

export const Styled = {
  ReviewSection,
  Review,
  Indicator,
}