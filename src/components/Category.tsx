import { FC } from 'react';
import { ICategoryProps } from '../utils/interfaces';
import StyledCategoriesItem from './styles/StyledCategoriesItem';
import StyledFlex from './styles/StyledFlex';

const Caregory: FC<ICategoryProps> = ({ category, onSelectCategory, isActive }) => {
  return (
    <StyledFlex>
      <StyledCategoriesItem isActive={isActive} onClick={() => onSelectCategory(category)}>
        {category}
      </StyledCategoriesItem>
    </StyledFlex>
  );
};

export default Caregory;
