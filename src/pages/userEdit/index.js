import React, { useState, useEffect } from "react";

import axios from "../../services/api";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import {
  StyledSection,
  StyledDiv,
  StyledStrong,
  StyledError,
  StyledSuccess,
  StyledLabel,
  StyledInput,
  StyledDivOptions,
  StyledButtonCancel,
  StyledButtonEdit
} from "./styles";

const UserEdit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get(`/users/${id}?delay=2`);
      const data = response.data.data;
      setFirstName(data.first_name);
      setLastName(data.last_name);
    };

    loadUser();
  }, [id]);

  const handleEdit = async () => {
    try {
      const response = await axios.put(`users/${id}?delay=2`, {
        first_name: firstName,
        last_name: lastName
      });

      const data = response.data;

      setFirstName(data.first_name);
      setLastName(data.last_name);
      setSuccess("Sucesso na edição");
    } catch (err) {
      console.log(err);
      setError("Erro na edição");
    }
  };

  return (
    <StyledSection>
      <StyledDiv>
        <StyledStrong>Edição</StyledStrong>
        <form>
          {error && <StyledError>{error}</StyledError>}
          {success && <StyledSuccess>{success}</StyledSuccess>}
          <div>
            <StyledLabel htmlFor="firstName">Nome</StyledLabel>
            <StyledInput
              type="firstName"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="lastName">Sobrenome</StyledLabel>
            <StyledInput
              type="lastName"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </div>
        </form>
        <StyledDivOptions>
          <StyledButtonCancel onClick={() => history.push("/users")}>
            Cancelar
          </StyledButtonCancel>
          <StyledButtonEdit onClick={() => handleEdit()}>
            Editar
          </StyledButtonEdit>
        </StyledDivOptions>
      </StyledDiv>
    </StyledSection>
  );
};

export default UserEdit;
