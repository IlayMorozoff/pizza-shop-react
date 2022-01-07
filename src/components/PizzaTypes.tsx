import { FC } from 'react';
import { IPropsPizzaTypes } from '../utils/interfaces';
import StyledFlex from './styles/StyledFlex';
import { StyledPizzaTypesContainer, StyledPizzaTypesItem } from './styles/StyledPizzaTypes';

const PizzaTypes: FC<IPropsPizzaTypes> = ({
  sizes,
  types,
  typesDefault,
  sizesDefault,
  activeType,
  activeSize,
  onSelectType,
  onSelectSize,
}) => (
  <StyledPizzaTypesContainer>
    <StyledFlex direction="column">
      <StyledFlex justify="space-between" align="center">
        {typesDefault.map((type) => {
          return (
            <StyledPizzaTypesItem
              isActive={activeType === type}
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

export default PizzaTypes;
