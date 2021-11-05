import styled from 'styled-components';

const StyledCategoriesItem = styled.div<{ isActive?: boolean | null }>`
  padding: 15px 28px;
  background-color: ${({ isActive }) => (isActive ? '#282828' : '#f9f9f9')};
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#2c2c2c')};
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  margin: 10px 8px 0 8px;
  border-radius: 30px;
`;

export default StyledCategoriesItem;
