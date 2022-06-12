import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #f7fdfa;
  padding: 60px;
  color: red;
  font-size: 13px;

  label {
    color: #868683;
    font-size: 13px;
  }
  input {
    margin-bottom: 15px;
  }
  button {
    padding: 10px;
    background-color: #edfdf1;
    border: 1px solid #868683;
    color: #868683;
  }
  button::hover {
    cursor: pointer;
  }
`;
