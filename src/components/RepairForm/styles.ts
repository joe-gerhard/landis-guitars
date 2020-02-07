import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type RepairFormProps = {
  theme: Theme;
  open?: boolean;
}

const RepairForm = styled('div')<RepairFormProps>(({ theme, open }) => css`
  display: flex;
  flex-direction: column;
  background: white;
  height: ${open ? 'calc(100vh - 166px)' : 0};
  overflow: ${open ? 'scroll' : 'hidden'};
  padding: 0 17px;
  transition: height .5s;

  h2 {
    font-size: 20px;
    margin-top: 25px;
  }

  p {
    font-size: 12px;
    margin-bottom: 10px;
  }

  input {
    border: none;
    border-bottom: 1px solid black;
    padding: 5px 3px;
    padding-bottom: 1px;
    margin-top: 20px;

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

  textarea {
    border: 1px solid black;
    height: 268px;
    padding: 13px 8px;
  }

  button {
    margin: 5px auto;
    width: 150px;
    height: 42px;
    background: #F2F2F2;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`);

export const Styled = {
  RepairForm,
}