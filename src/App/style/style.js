import styled, {createGlobalStyle} from "styled-components";

export const Container = styled.section`
  margin-top: 100px;

  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;

  overflow: hidden;
  overflow-y: none;
  overflow-x: none;

  appearance: none;

  padding: 0 16px;
`

export const Header = styled.header`
 text-align: center;
`;

export const ContainerCalc = styled.div`
  width: 100%;
  max-width: 450px;
  height: 475px;
  margin: 70px auto 0;
  padding: 8px;
  background: #380b42 ;
  border-radius: 20px;

`;

export const Display = styled.div`
    margin: 8px auto;
    width: 95%;
    height: 60px;
    font-size: 16px;
    overflow: hidden;
    text-align: right;
    color: #fff;
    padding: 4px;
    border-radius: 8px;
    background: #7e57c2;
    display: flex;
    flex-direction: column;

`;

export const SpanValue = styled.span`
  font-size: 32px;
`;

export const SpanMemory = styled.span`
  font-size: 15px;
`;

export const Ul = styled.ul`
  padding: 0 10px 0 15px; 
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 5px;
`;

export const Button = styled.li`
  height: 65px;
  list-style: none;
  border-radius: 4px;
  color: #fff;
  background-color: #a526c2;
  cursor: pointer;
  line-height: 60px;
  text-align: center;
  
  &:active {
    background: blue;
  }

  &:hover {
    background: #cd68e4;
  }

  &:nth-child(19) {
    grid-column: span 2;
  }

  &:last-child {
    grid-column: span 5;
  }

  
`;

export const BtnCheck =  styled.button`
  height: 60px;
  color: #fff;
  background-color: #7777;
  grid-column: span 4;
  text-align: center;
  cursor: pointer;
  line-height: 30px;

  &:hover {
    background: red;
  }
`;

export const Footer = styled.footer`
margin-top: 16px;

a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;

  img {
    width: 25px;
    margin-left: 8px;
  }

  &:hover {
    color: #9134b3;
  }
}

`



