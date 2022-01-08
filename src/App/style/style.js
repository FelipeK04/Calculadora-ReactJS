import styled from "styled-components";

export const Container = styled.div`
  width: 644px;
  height: 500px;
  margin: 50px auto 0;
  padding: 2px;
  background: #673ab7 ;

  
  border-radius: 10px;
`;

export const Header = styled.header`
`;

export const Input = styled.div`
    margin: 8px auto;
    width: 95%;
    height: 60px;
    font-size: 16px;
    overflow: hidden;
    text-align: right;
    color: #fff;
    padding: 4px;
    background: #7e57c2 ;
    box-shadow: inset -1px -1px 4px 1px;

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
  padding: 0 15px 0 20px; 
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  border: 0;
`;

export const Button = styled.li`
  height: 65px;

  list-style: none;

  border-radius: 3px;
  color: #fff;
  background-color: #5e35b1;
  cursor: pointer;
  line-height: 60px;
  text-align: center;
  
  &:active {
    background: blue;
  }

  &:hover {
    background: #651fff;
  }

  &:nth-child(19) {
    /* grid-row: span 2; */
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



