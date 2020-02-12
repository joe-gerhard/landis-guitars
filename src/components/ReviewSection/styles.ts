import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type ReviewSectionProps = {
  theme: Theme;
  selected?: boolean;
}

const ReviewSection = styled('section')<ReviewSectionProps>(({ theme }) => css`
  background: #343434;
`);

const ReviewContainer = styled('div')<ReviewSectionProps>(({ theme }) => css`
  display: flex;
  overflow-x: scroll;
  background: #343434;
  scroll-snap-type: x mandatory;

  ::-webkit-scrollbar {
    width: 0px; 
    background: transparent; 
  }

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
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

`);

const Dot = styled('div')<ReviewSectionProps>(({ theme, selected }) => css`
    width: ${selected ? 8 : 6}px;
    height: ${selected ? 8 : 6}px;
    margin: 2px;
    background: white;
    border-radius: 100%;
    transition: .3s;
`);

export const Styled = {
  ReviewSection,
  ReviewContainer,
  Review,
  Indicator,
  Dot,
}