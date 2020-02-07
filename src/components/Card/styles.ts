import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type CardProps = {
  theme: Theme
}

const Card = styled('div')(({ theme }) => css`
  display: flex;
  flex-direction: column;
  background: #343434;
  color: white;
  height: 166px;
  padding: 18px;
  padding-top: 28px;
  margin-bottom: 10px;

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 12px;
  }

  button {
    margin: 0 auto;
    margin-top: auto;
    width: 150px;
    height: 42px;
    background: #F2F2F2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`);

export const Styled = {
  Card,
}