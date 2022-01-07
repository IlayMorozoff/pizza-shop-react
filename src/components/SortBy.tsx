import { FC, useRef, useState } from 'react';
import { setSortBy } from '../store/reducers/filtersSlice';
import { kindOfSortBy } from '../utils/data';
import { useAppDispatch } from '../utils/hooks/redux';
import useOutsideAlerter from '../utils/hooks/useOutsideAlerter';
import { ISortType } from '../utils/interfaces';
import StyledFlex from './styles/StyledFlex';
import { StyledSortItem, StyledSortList } from './styles/StyledSortList';
import StyledText from './styles/StyledText';

const SortBy: FC = () => {
  const dispatch = useAppDispatch();
  const [selectSort, setSelectSort] = useState<string>('популярности');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const refSortContainer = useRef<HTMLDivElement>(null);

  const hideDropdown = (): void => {
    setIsOpen(false);
  };

  useOutsideAlerter(hideDropdown, refSortContainer);

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
      <div ref={refSortContainer}>
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
              {kindOfSortBy.map((sort: ISortType) => {
                return (
                  <StyledSortItem
                    isActive={selectSort === sort.name}
                    key={sort.name}
                    onClick={() => onSelectSortBy(sort)}
                  >
                    {sort.name}
                  </StyledSortItem>
                );
              })}
            </StyledSortList>
          </StyledFlex>
        )}
      </div>
    </StyledFlex>
  );
};

export default SortBy;
