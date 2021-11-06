import { FC, useState } from 'react';
import { IPropsPizzaTypes } from '../utils/interfaces';
import StyledFlex from './styles/StyledFlex';
import { StyledPizzaTypesContainer, StyledPizzaTypesItem } from './styles/StyledPizzaTypes';

const PizzaTypes: FC<IPropsPizzaTypes> = ({ sizes, types }) => {
  const typesDefault = ['токное', 'традиционное'];
  const sizesDefault = [26, 30, 40];
  const [activeTypes, setActiveTypes] = useState(typesDefault[types[0]]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const onSelectType = (type: string) => {
    setActiveTypes(type);
  };

  const onSelectSize = (size: number) => {
    setActiveSize(size);
  };

  return (
    <StyledPizzaTypesContainer>
      <StyledFlex direction="column">
        <StyledFlex justify="space-between" align="center">
          {typesDefault.map((type) => {
            return (
              <StyledPizzaTypesItem
                isActive={activeTypes === type}
                disabled={!types.includes(typesDefault.indexOf(type))}
                onClick={() => onSelectType(type)}
                key={type}
                width="49%"
              >
                {type}
              </StyledPizzaTypesItem>
            );
          })}
        </StyledFlex>
        <StyledFlex justify="space-between" align="center">
          {sizesDefault.map((size) => {
            return (
              <StyledPizzaTypesItem
                isActive={activeSize === size}
                disabled={!sizes.includes(size)}
                onClick={() => onSelectSize(size)}
                key={size}
                width="32%"
              >
                {size} см.
              </StyledPizzaTypesItem>
            );
          })}
        </StyledFlex>
      </StyledFlex>
    </StyledPizzaTypesContainer>
  );
};

export default PizzaTypes;
