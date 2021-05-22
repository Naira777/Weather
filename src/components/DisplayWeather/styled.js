import styled, { keyframes } from "styled-components";

const anima = keyframes` 
{

    0%   {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
`;
export const Box = styled.div`
  display: flex;
  width: 500px;
  height: 250px;
  margin-left: 470px;
  margin-top: 50px;
  flex-direction: column;
  animation: ${anima} 1.5s;
`;
export const Row = styled.div`
  border-bottom: 0.1rem #eff3ff solid;
  width: 500px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #d3e4e4;
  box-shadow: 3px 6px 13px #ced8d8;
  color: #647777;
  opacity: 0.8;
  font-weight: 800;
  font-size: ${(props) => (props.big ? "20px" : "18px")};
  padding-top: 10px;
  border: none;
  &:hover {
    transform: scaleY(1.2);
    transform: ;
  }
`;

export const Box0 = styled.div`
  border-bottom: 0.1rem #eff3ff solid;
  width: 100px;
  height: 28px;
  background: ${(props) => (props.editmode == 0 ? "#82D082" : "#CBF7D6")};
  margin-bottom: 30px;
  border-radius: 10px;
  border: none;
  text-align: center;
  color: #707170;
  font-weight: 600;
  margin-top: -20px;
  padding-top: 7px;

  box-shadow: 1px 8px 12px #b2d4b2;
`;

export const Box1 = styled.div`
  border-bottom: 0.1rem #eff3ff solid;
  width: 100px;
  height: 28px;
  background: ${(props) => (props.editmode == 1 ? "#82D082" : "#CBF7D6")};
  margin-bottom: 30px;
  border-radius: 10px;
  border: none;
  text-align: center;
  color: #707170;
  font-weight: 600;
  margin-top: -20px;
  padding-top: 7px;

  box-shadow: 1px 8px 12px #b2d4b2;
`;

export const Box2 = styled.div`
  border-bottom: 0.1rem #eff3ff solid;
  width: 100px;
  height: 28px;
  background: ${(props) => (props.editmode == 2 ? "#82D082" : "#CBF7D6")};
  margin-bottom: 30px;
  border-radius: 10px;
  border: none;
  text-align: center;
  color: #707170;
  font-weight: 600;
  margin-top: -20px;
  padding-top: 7px;

  box-shadow: 1px 8px 12px #b2d4b2;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
