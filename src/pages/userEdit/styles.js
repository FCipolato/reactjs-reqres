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

const StyledMsg = styled.p`
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
  text-align: center;
`;

export const StyledError = styled(StyledMsg)`
  color: #ff3333;
  border: 1px solid #ff3333;
`;

export const StyledSuccess = styled(StyledMsg)`
  color: #487d3c;
  border: 1px solid #487d3c;
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

export const StyledDivOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  border: 0;
  width: 82px;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
`;

export const StyledButtonEdit = styled(StyledButton)`
  background: #487d3c;
  color: #fff;
`;

export const StyledButtonCancel = styled(StyledButton)`
  background: #fff;
  color: #ff3333;
  border: 1px solid #ff3333;
`;

export default {
  StyledSection,
  StyledDiv,
  StyledStrong,
  StyledError,
  StyledSuccess,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledDivOptions,
  StyledButtonEdit,
  StyledButtonCancel
};
