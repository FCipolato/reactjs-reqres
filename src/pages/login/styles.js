import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledDiv = styled.div`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  padding: 30px 20px;
`;

export const StyledStrong = styled.strong`
  font-size: 20px;
  text-align: center;
  display: block;
  color: #333;
  margin-bottom: 20px;
`;

export const StyledError = styled.p`
  color: #ff3333;
  margin-bottom: 15px;
  border: 1px solid #ff3333;
  padding: 10px;
  width: 100%;
  text-align: center;
`;

export const StyledLabel = styled.label`
  color: #acacac;
  font-size: 14px;
  font-weight: bold;
  display: block;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
`;

export const StyledButton = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7d40ef;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background 0.5s;

  &:hover {
    background: #6931ca;
  }
`;

export default {
  StyledSection,
  StyledDiv,
  StyledStrong,
  StyledError,
  StyledLabel,
  StyledInput,
  StyledButton
};
