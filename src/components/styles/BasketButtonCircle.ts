import styled from 'styled-components';

const BasketButtonCircle = styled.button<{ $isCount?: boolean; $isDelete?: boolean }>`
  font-size: ${({ $isCount }) => ($isCount ? '22px' : '15px')};
  border-radius: 50%;
  height: 32px;
  width: 32px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid ${({ $isCount }) => ($isCount ? '#fe5f1e' : '#d7d7d7')};
  color: ${({ $isCount }) => ($isCount ? '#fe5f1e' : '#d7d7d7')};

  &:hover {
    background-color: ${({ $isCount }) => ($isCount ? '#fe5f1e' : '#d7d7d7')};
    border: 2px solid transparent;
    color: ${({ $isCount }) => ($isCount ? 'white' : 'black')};
  }
`;

export default BasketButtonCircle;
