import { FC } from 'react';
import BasketIcon from './BasketIcon';
import StyledFlex from './styles/StyledFlex';
import StyledText from './styles/StyledText';
import TrashIcon from './TrashIcon';

const HeaderBasket: FC = () => {
  return (
    <StyledFlex margin="90px 0 30px 0" justify="space-between">
      <StyledFlex>
        <BasketIcon size={32} color="#3f3f3f" />
        <StyledText textColor="#000" fontSize="32px" padding="0 0 0 18px">
          Корзина
        </StyledText>
      </StyledFlex>
      <StyledFlex cursor="pointer" align="center">
        <TrashIcon />
        <StyledText textColor="#b6b6b6" padding="0 0 0 8px" isCursor fontWeight="400">
          Очистить корзину
        </StyledText>
      </StyledFlex>
    </StyledFlex>
  );
};

export default HeaderBasket;
