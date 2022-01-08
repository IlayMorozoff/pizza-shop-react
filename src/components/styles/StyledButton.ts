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
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    background-color: #fe5f1e;
    color: #ffffff;
  }
`;

export default StyledButton;
