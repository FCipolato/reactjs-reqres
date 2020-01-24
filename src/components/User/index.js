import React from "react";

import { useHistory } from "react-router-dom";

import {
  StyledLi,
  StyledHeader,
  StyledImg,
  StyledDiv,
  StyledStrong,
  StyledSpan,
  StyledDivOptions,
  StyledButtonEdit,
  StyledButtonDelete
} from "./styles";

const User = ({ user, deleteUser }) => {
  let history = useHistory();

  const editUser = id => history.push(`/user/${id}`);

  return (
    <StyledLi>
      <StyledHeader>
        <StyledImg src={user.avatar} alt={user.first_name} />
        <StyledDiv className="user-info">
          <StyledStrong>{`${user.first_name} ${user.last_name}`}</StyledStrong>
          <StyledSpan>{user.email}</StyledSpan>
        </StyledDiv>
      </StyledHeader>
      <StyledDivOptions>
        <StyledButtonDelete onClick={() => deleteUser(user.id)}>
          Deletar
        </StyledButtonDelete>
        <StyledButtonEdit onClick={() => editUser(user.id)}>
          Editar
        </StyledButtonEdit>
      </StyledDivOptions>
    </StyledLi>
  );
};

export default User;
