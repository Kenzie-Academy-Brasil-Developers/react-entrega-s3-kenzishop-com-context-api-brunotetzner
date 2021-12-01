import styled from "styled-components";

export const HeaderStyled = styled.header`
  max-width: 100vw;
  height: 8vh;
  background-color: rgb(165, 94, 36, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1%;
  h1 {
    margin: 0;
    margin-left: 2.6%;
    color: #efdbff;
  }
  button {
    margin-right: 2.6%;
    background-color: transparent;
    color: white;
    border: 0;
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  span {
    display: flex;
    flex-direction: column;
    background-color: rgb(0, 0, 0, 0.5);
    padding: 2px;
    border-radius: 4px;
  }
  p {
    font-size: 12px;
    margin: 0;
    margin-right: 2px;
  }
  #button-and-price {
    display: flex;
    flex-direction: row;
    color: white;
    margin-right: 2.5%;
  }
`;
