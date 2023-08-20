import { Block, Form, Forminput, Button } from './Searchbar.styled';
import { BiSearchAlt2 } from 'react-icons/bi';
export const Searchbar = ({ onSubmit }) => {
  return (
    <Block>
      <Form action="" onSubmit={onSubmit}>
        <Forminput
          type="text"
          placeholder="Search images and photos"
          name="seachImg"
        />
        <Button type="submit">
          <BiSearchAlt2 size={18} />
          Submit
        </Button>
      </Form>
    </Block>
  );
};
