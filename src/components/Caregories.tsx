import { FC, useState } from 'react';
import { categoriesList } from '../utils/data';
import Category from './Category';
import StyledFlex from './styles/StyledFlex';

const Caregories: FC = () => {
  const [selectItem, setSelectItem] = useState('Все');

  const onSelectCategory = (category: string): void => {
    setSelectItem(category);
  };

  return (
    <StyledFlex>
      {categoriesList.map((category) => {
        return (
          <Category
            isActive={selectItem === category}
            key={category}
            category={category}
            onSelectCategory={onSelectCategory}
          />
        );
      })}
    </StyledFlex>
  );
};

export default Caregories;
