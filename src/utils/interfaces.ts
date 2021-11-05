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
