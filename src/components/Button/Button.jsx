import { ButtonLoader } from './Button.styled';

export const Button = ({ onClick }) => {
  return <ButtonLoader onClick={onClick}>Load more</ButtonLoader>;
};
