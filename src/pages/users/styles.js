import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledLi = styled.li`
  list-style-type: none;
  padding: 0 15px;
`;

export const StyledUlButton = styled.ul`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const StyledPagination = styled.button`
  border: 0;
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

export const StyledDivOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  border: 0;
  width: 90px;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
`;

export const StyledButtonCancel = styled(StyledButton)`
  background: #487d3c;
  color: #fff;
`;

export const StyledButtonConfirm = styled(StyledButton)`
  background: #fff;
  color: #ff3333;
  border: 1px solid #ff3333;
`;

export default {
  StyledSection,
  StyledUl,
  StyledLi,
  StyledUlButton,
  StyledPagination,
  StyledDivOptions,
  StyledButtonCancel,
  StyledButtonConfirm
};
