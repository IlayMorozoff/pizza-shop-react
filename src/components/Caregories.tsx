import { FC, useState } from 'react';
import { setCategory } from '../store/reducers/filtersSlice';
import { categoriesList } from '../utils/data';
import { useAppDispatch, useAppSelector } from '../utils/hooks/redux';
import Category from './Category';
import StyledFlex from './styles/StyledFlex';

const Caregories: FC = () => {
  // const {category} = useAppSelector((state) => state.filtersReducer);
  const dispatch = useAppDispatch();
  const [selectItem, setSelectItem] = useState('Все');

  const onSelectCategory = (category: string): void => {
    setSelectItem(category);
    dispatch(setCategory(categoriesList.findIndex((item) => item === category)));
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
