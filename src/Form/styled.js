import styled from "styled-components";

export const Input = styled.input`
  width: 350px;
  height: 45px;
  box-shadow: 3px 6px 13px black;
  outline: none;
  background: #f7fcfd;
  border-radius: 10px;
  opacity: 0.8;
  font-size: 17px;
  border: none;
  margin-right: 3px;
  padding-left: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 220px;
  margin-left: 480px;
`;
export const Button = styled.button`
  width: 110px;
  height: 46px;
  border: none;
  background: #6fda89;
  border-radius: 10px;
  opacity: 0.8;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 3px 6px 13px black;
  &:hover {
    background: #1cc74a;
  }
`;
