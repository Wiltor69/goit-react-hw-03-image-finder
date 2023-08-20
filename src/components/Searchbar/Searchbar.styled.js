import styled from 'styled-components';

export const Block = styled.div`
  background-color: blue;
  margin-top: 15px;
  margin-bottom: 35px;
  padding: 15px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Forminput = styled.input`
  width: 400px;
  height: 30px;
`;

export const Button = styled.button`
  height: 35px;
  background-color: yellow;
  color: blue;
  padding: 5px 10px;
  cursor: pointer;
  font-family: Roboto sans-serif;
  font-weight: 700;
  font-size: 18px;
  border-radius: 10px;
  border-bottom-style: solid;
  border-color: red;
`;
