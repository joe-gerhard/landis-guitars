import styled from 'styled-components';

const ServicesSection = styled.section`
  display: flex;
  width: 100%;
`;

const HeaderContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Description = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 40px;

  img {
    width: 80%;
    object-fit: scale-down;
  }
`;
 
export const Styled = {
  ServicesSection,
  HeaderContainer,
  Description,
}