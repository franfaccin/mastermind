import styled from "@emotion/styled";

export const Button = styled.button`
  border: 2px solid #000;
  background-color: #fff;
  height: 50px;
  border-radius: 25px;
  padding: 0 15px;
  vertical-align: middle;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;

  :active {
    background-color: #ccc;
  }
`;
