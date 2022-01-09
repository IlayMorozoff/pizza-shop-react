import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledBtnBasket } from './styles/StyledBasketButton';
import StyledFlex from './styles/StyledFlex';
import StyledText from './styles/StyledText';

const EmptyBasket: FC = () => {
  const history = useHistory();

  const onBack = () => {
    history.push('/');
  };

  return (
    <StyledFlex direction="column" justify="center" align="center">
      <StyledText fontSize="34px" textColor="#000" padding="160px 0 0 0">
        Корзина пустая
      </StyledText>
      <div style={{ maxWidth: '550px', margin: '10px 0 50px 0' }}>
        <StyledText fontSize="20px" textColor="#777777" fontWeight="400" textAlign="center">
          Вероятней всего, вы не добавляли ещё пиццу в корзину. Для того, чтобы заказать пиццу,
          перейдите на главную страницу.
        </StyledText>
      </div>
      <div style={{ margin: '0 0 80px 0' }}>
        <img src="../assets/emptyBasket.png" alt="emptyBasket" width="300" height="255" />
      </div>
      <StyledBtnBasket $isPayButton onClick={onBack}>
        Вернуться назад
      </StyledBtnBasket>
    </StyledFlex>
  );
};

export default EmptyBasket;
