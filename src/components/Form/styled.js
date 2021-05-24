import styled from "styled-components";

export const Input = styled.input`
  width: 35rem;
  height: 4.5rem;
  box-shadow: 0.3rem 0.6rem 1.3rem black;
  outline: none;
  background: #f7fcfd;
  border-radius: 1rem;
  opacity: 0.8;
  font-size: 17px;
  border: none;
  margin-right: 0.3rem;
  padding-left: 1rem;
`;
export const Wrapper = styled.div`
 
  margin:  auto;
  margin-top: 20rem;

`;
export const Button = styled.button`

 max-width: 11rem;
  height: 4.7rem;
  border: none;
  background: #6fda89;
  border-radius: 1rem;
  opacity: 0.8;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0.3rem 0.6rem 1.3rem black;
  &:hover {
    background: #1cc74a;
  }
`;
