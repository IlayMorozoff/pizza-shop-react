import styled from 'styled-components';

export const StyledSortList = styled.div`
  width: 136px;
  height: 136px;
  border-radius: 10px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.03);
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 30px;
  background-color: #ffffff;
`;

export const StyledSortItem = styled.div<{ isActive?: boolean }>`
  background-color: ${({ isActive }) => (isActive ? 'rgba(254, 95, 30, 0.05)' : '#ffffff')};
  color: ${({ isActive }) => (isActive ? '#fe5f1e' : '#000000')};
  padding: 10px 15px;
  cursor: pointer;
`;
