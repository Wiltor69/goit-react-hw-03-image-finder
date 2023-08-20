import { Oval } from 'react-loader-spinner';
import { Block } from './Loader.styled';

export const Loader = () => {
  return (
    <Block>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={2000}
        strokeWidthSecondary={2030}
        color="blue"
        secondaryColor="yellow"
      />
    </Block>
  );
};
