import styled from "styled-components";

export const StyledLi = styled.li`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;
  list-style-type: none;
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;

export const StyledDiv = styled.div`
  margin-left: 10px;
`;

export const StyledStrong = styled.strong`
  display: block;
  font-size: 16px;
  color: #333;
`;

export const StyledSpan = styled.span`
  font-size: 13px;
  color: #999;
  margin-top: 2px;
`;

export const StyledP = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
`;

export const StyledDivOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  border: 0;
  width: 70px;
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

export const StyledButtonDelete = styled(StyledButton)`
  background: #fff;
  color: #ff3333;
  border: 1px solid #ff3333;
`;

export default {
  StyledLi,
  StyledHeader,
  StyledImg,
  StyledDiv,
  StyledStrong,
  StyledSpan,
  StyledP,
  StyledDivOptions,
  StyledButtonEdit,
  StyledButtonDelete
};
