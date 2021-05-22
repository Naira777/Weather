import styled, { keyframes } from "styled-components";

const anima = keyframes` 
{
    0%   {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
`;
export const Box = styled.div`
  margin: auto;
  max-width: 50rem;
  min-width: 42rem;
  height: 25rem;
  animation: ${anima} 1.5s;
`;
export const Row = styled.div`

  width: 50rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #d3e4e4;
  box-shadow: 0.3rem  0.6rem  1.3rem #ced8d8;
  color: ${(props) => (props.big ? "#656966" : "#647777")};
  opacity: 0.8;
  font-weight:${(props) => (props.big ? "900" : "800")};
  font-size: ${(props) => (props.big ? "2.2rem" : "1.7rem")};
  padding-top: 1.3rem;
  border: none; 
  &:hover {
    transform: scaleY(1.2);
  
  }
`;

export const Box0 = styled.div`
  border-bottom: 0.1rem #eff3ff solid;
  width: 10rem;
  height: 2.8rem;
  background: ${(props) => (props.editmode == 0 ? "#82D082" : "#CBF7D6")};
  border-radius: 1rem;
  border: none;
  text-align: center;
  color: #707170;
  font-weight: 600;
  margin: 2rem auto;
  padding-top: 0.7rem;
  font-size: 1.5rem;
  box-shadow: 0.1rem 0.8rem 1.2rem #b2d4b2;
`;

export const Box1 = styled.div`
  border-bottom: 0.1rem #eff3ff solid;
  width: 10rem;
  height: 2.8rem;
  background: ${(props) => (props.editmode == 1 ? "#82D082" : "#CBF7D6")};
  border-radius: 1rem;
  border: none;
  text-align: center;
  color: #707170;
  font-weight: 600;
  margin: 2rem auto;
  padding-top: 0.7rem;
  font-size: 1.5rem;
  box-shadow: 0.1rem 0.8rem 1.2rem #b2d4b2;
`;

export const Box2 = styled.div`
  border-bottom: 0.1rem #eff3ff solid;
  width: 10rem;
  height: 2.8rem;
  background: ${(props) => (props.editmode == 2 ? "#82D082" : "#CBF7D6")};
  border-radius: 1rem;
  border: none;
  text-align: center;
  color: #707170;
  font-weight: 600;
  margin: 2rem auto;
  padding-top: 0.7rem;
  font-size: 1.5rem;
  box-shadow: 0.1rem 0.8rem 1.2rem #b2d4b2;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
