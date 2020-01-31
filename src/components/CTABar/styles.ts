import styled from 'styled-components';
import { theme } from '../../styles/theme';


const CTABar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;
  background: ${theme.primary};
`

const Input = styled.input`
  margin-bottom: 40px;
`;

const TextArea = styled.textarea`

`;

export const Styled = {
  CTABar,
  Input,
  TextArea,
}