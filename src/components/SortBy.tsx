import { FC, useState } from 'react';
import { kindOfSortBy } from '../utils/data';
import StyledFlex from './styles/StyledFlex';
import { StyledSortItem, StyledSortList } from './styles/StyledSortList';
import StyledText from './styles/StyledText';

const SortBy: FC = () => {
  const [selectSort, setSelectSort] = useState<string>('популярности');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onSelectSortBy = (sortBy: string): void => {
    setSelectSort(sortBy);
    setIsOpen(false);
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
            {kindOfSortBy.map((sortBy) => {
              return (
                <StyledSortItem
                  isActive={selectSort === sortBy}
                  key={sortBy}
                  onClick={() => onSelectSortBy(sortBy)}
                >
                  {sortBy}
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
