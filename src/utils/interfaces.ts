export interface IPropsStyledText {
  fontSize: number;
  fontWeight: number;
  color?: string;
}

export interface IPropsStyledFlex {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  cursor?: string;
  flexWrap?: string;
  position?: string;
  flex?: string;
  gap?: string;
}

export interface IPropsStyledTextDefault {
  textAlign?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  decoration?: string;
  isCursor?: boolean;
}

export interface ICategoryProps {
  category: string;
  onSelectCategory: (category: string) => void;
  isActive: boolean;
}

export interface IPizzaData {
  id: number;
  imageUrl: string;
  name: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
}

export interface IPropsPizzaTypes {
  types: Array<number>;
  sizes: Array<number>;
}

export interface ISortType {
  name: string;
  type: string;
}
