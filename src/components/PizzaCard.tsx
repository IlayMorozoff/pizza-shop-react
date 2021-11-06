import { FC, useState } from 'react';
import { IPizzaData } from '../utils/interfaces';
import PizzaTypes from './PizzaTypes';
import StyledButton from './styles/StyledButton';
import StyledButtonCounter from './styles/StyledButtonCounter';
import StyledFlex from './styles/StyledFlex';
import { StyledWrapperIgm, StyledImg } from './styles/StyledImg';
import StyledText from './styles/StyledText';

const PizzaCard: FC<IPizzaData> = ({ imageUrl, category, price, types, name, sizes }) => {
  const [isAddBasket, setIsAddBasket] = useState(false);

  const onAddToBasket = () => {
    setIsAddBasket(true);
  };

  return (
    <StyledFlex direction="column" margin="35px 0 65px 0" flex="22%">
      <StyledWrapperIgm>
        <StyledImg src={imageUrl} alt="pizza picture" />
      </StyledWrapperIgm>
      <StyledText
        textColor="#000000"
        fontWeight="800"
        fontSize="20px"
        textAlign="center"
        padding="20px 0 20px 0;"
      >
        {name}
      </StyledText>
      <PizzaTypes types={types} sizes={sizes} />
      <StyledFlex align="center" justify="space-between" margin="20px 0 0 0">
        <StyledText textColor="#000000" fontSize="22px">
          от {price} ₽
        </StyledText>
        <StyledButton primary={isAddBasket} outlined={isAddBasket} onClick={onAddToBasket}>
          Добавить
          <StyledButtonCounter>1</StyledButtonCounter>
        </StyledButton>
      </StyledFlex>
    </StyledFlex>
  );
};

export default PizzaCard;
