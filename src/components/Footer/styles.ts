import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type FooterProps = {
  theme: Theme
}

const Footer = styled('footer')(({ theme }) => css`
  display: flex;
  justify-content: space-between;
  height: 150px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: 31px;
  margin-bottom: 6px;
  padding: 22px 29px 13px 29px;
  

  img {
    width: 92px;
  }  
`);

const ContactInfo = styled('div')(({ theme }) => css`
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
    line-height: 17px;

    &:nth-child(4) {
      margin-top: 15px;
    }
  }
`);

const ImageContainer = styled('div')(({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
`);

const SocialLinks = styled('div')(({ theme }) => css`
  margin-top: auto;
  display: flex;
  a {
    margin-right: 10px;
    color: grey; 
  }
`);


export const Styled = {
  Footer,
  SocialLinks,
  ContactInfo,
  ImageContainer,
}