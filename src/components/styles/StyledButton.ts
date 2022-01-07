import styled from 'styled-components';

const StyledButton = styled.button<{ primary?: boolean; outlined?: boolean }>`
  border-radius: 30px;
  font-size: 18px;
  height: 40px;
  width: 55%;
  border: 1px solid #fe5f1e;
  cursor: pointer;
  background-color: transparent;
  color: #fe5f1e;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* &::before {
    content: '+';
    font-size: 30px;
    color: #fe5f1e;
    position: absolute;
    top: 3px;
    left: 11px;
  } */

  &:hover {
    background-color: #fe5f1e;
    color: #ffffff;
    /* &::before {
      content: '+';
      font-size: 30px;
      color: #ffffff;
      position: absolute;
      top: 3px;
      left: 11px;
    } */
  }
`;

export default StyledButton;
