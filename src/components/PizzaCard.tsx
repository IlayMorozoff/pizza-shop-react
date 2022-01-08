import { FC, useState } from 'react';
import { useAppSelector } from '../utils/hooks/redux';
import { IPizzaData } from '../utils/interfaces';
import PizzaTypes from './PizzaTypes';
import StyledButton from './styles/StyledButton';
import StyledButtonCounter from './styles/StyledButtonCounter';
import StyledFlex from './styles/StyledFlex';
import { StyledWrapperIgm, StyledImg } from './styles/StyledImg';
import StyledPlus from './styles/StyledPlus';
import StyledText from './styles/StyledText';

const PizzaCard: FC<IPizzaData> = ({ imageUrl, price, types, name, sizes, onClickAddToBasket }) => {
  const typesDefault = ['тонкое', 'традиционное'];
  const sizesDefault = [26, 30, 40];
  const [activeType, setActiveTypes] = useState(typesDefault[types[0]]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [newPrice, setNewPrice] = useState(price);
  const counter = useAppSelector((state) => state.basketReducer.basketItems)
    .filter((item) => item.name === name)
    .map((item) => item.counter)
    .reduce((sum, cur) => sum + cur, 0);

  const onChangePrice = (size: number): void => {
    if (size === 30) {
      setNewPrice((prevPrice) => {
        if (prevPrice === price) {
          return newPrice + 50;
        }
        return newPrice - 100;
      });
    } else if (size === 40) {
      setNewPrice((prevPrice) => {
        if (prevPrice === price) {
          return newPrice + 150;
        }
        return newPrice + 100;
      });
    } else {
      setNewPrice(price);
    }
  };

  const onSelectType = (type: string) => {
    setActiveTypes(type);
  };

  const onSelectSize = (size: number) => {
    setActiveSize(size);
    onChangePrice(size);
  };

  const onAddToBasket = () => {
    const pizzaToBasket = {
      imageUrl,
      price: newPrice,
      type: activeType,
      size: activeSize,
      name,
      counter: 1,
      totalPriceItem: newPrice,
    };
    onClickAddToBasket(pizzaToBasket);
  };

  return (
    <StyledFlex direction="column">
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
      <PizzaTypes
        types={types}
        sizes={sizes}
        typesDefault={typesDefault}
        sizesDefault={sizesDefault}
        onSelectType={onSelectType}
        onSelectSize={onSelectSize}
        activeType={activeType}
        activeSize={activeSize}
      />
      <div style={{ maxHeight: '40px', margin: '20px 0 0 0' }}>
        <StyledFlex align="center" justify="space-between">
          <StyledText textColor="#000000" fontSize="22px">
            от {newPrice} ₽
          </StyledText>
          <StyledButton onClick={onAddToBasket}>
            <StyledPlus>+</StyledPlus>
            Добавить
            {counter !== 0 && <StyledButtonCounter>{counter}</StyledButtonCounter>}
          </StyledButton>
        </StyledFlex>
      </div>
    </StyledFlex>
  );
};

export default PizzaCard;
