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

export const StyledBtnBasket = styled.button<{ $isPayButton?: boolean }>`
  background-color: ${({ $isPayButton }) => ($isPayButton ? '#fe5f1e' : 'transparent')};
  color: ${({ $isPayButton }) => ($isPayButton ? 'white' : '#d3d3d3')};
  border: 2px solid ${({ $isPayButton }) => ($isPayButton ? '#fe5f1e' : '#d3d3d3')};
  height: 55px;
  width: 25%;
  border-radius: 30px;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: ${({ $isPayButton }) => ($isPayButton ? '#fe5f5e' : '#d3d3d6')};
    color: white;
  }

  ${({ $isPayButton }) =>
    !$isPayButton &&
    `
    &::before {
      content: '';
      background-image: url('../../assets/pathIcon.png');
      width: 5px;
      height: 12px;
      position: absolute;
      top: 20px;
      left: 20px;
    }
  `};
`;

export default StyledBasketButton;
