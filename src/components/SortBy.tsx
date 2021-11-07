import { FC, useState } from 'react';
import { setSortBy } from '../store/reducers/filtersSlice';
import { kindOfSortBy } from '../utils/data';
import { useAppDispatch } from '../utils/hooks/redux';
import { ISortType } from '../utils/interfaces';
import StyledFlex from './styles/StyledFlex';
import { StyledSortItem, StyledSortList } from './styles/StyledSortList';
import StyledText from './styles/StyledText';

const SortBy: FC = () => {
  const dispatch = useAppDispatch();
  const [selectSort, setSelectSort] = useState<string>('популярности');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onSelectSortBy = (sort: ISortType): void => {
    setSelectSort(sort.name);
    setIsOpen(false);
    dispatch(setSortBy(sort.type));
  };

  const onClickSortBy = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <StyledFlex align="center">
      <StyledText textColor="#2c2c2c" fontSize="14px" padding="0 8px 0 0">
        Сортировка по:
      </StyledText>
      <StyledText
        isCursor
        textColor="#fe5f1e"
        fontSize="14px"
        decoration="1px dashed #fe5f1e"
        onClick={onClickSortBy}
      >
        {selectSort}
      </StyledText>

      {isOpen && (
        <StyledFlex direction="column" position="relative">
          <StyledSortList>
            {kindOfSortBy.map((sortBy: ISortType) => {
              return (
                <StyledSortItem
                  isActive={selectSort === sortBy.name}
                  key={sortBy.name}
                  onClick={() => onSelectSortBy(sortBy)}
                >
                  {sortBy.name}
                </StyledSortItem>
              );
            })}
          </StyledSortList>
        </StyledFlex>
      )}
    </StyledFlex>
  );
};

export default SortBy;
