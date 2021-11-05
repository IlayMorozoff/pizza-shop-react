import styled from 'styled-components';

const StyledBasketButton = styled.button<{ borderRadius?: string; border?: string }>`
  background-color: #fe5f1e;
  width: 75px;
  height: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  border-right: ${({ border }) => border || 'none'};
`;

export default StyledBasketButton;
