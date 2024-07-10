import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #000;
  border-radius: 16px;
  padding: 20px;
  height: 400px;
  width: 300px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 8px;
  border-radius: 16px;
  color: #fff;
  background-color: #000;
  cursor: pointer;
`;
