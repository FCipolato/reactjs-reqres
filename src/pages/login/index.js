import React, { useState } from "react";

import axios from "../../services/api";
import { useHistory } from "react-router-dom";

import { login } from "../../services/auth";

import {
  StyledSection,
  StyledDiv,
  StyledStrong,
  StyledError,
  StyledLabel,
  StyledInput,
  StyledButton
} from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await axios.post("login?delay=2", {
        email,
        password
      });
      login(response.data.token);
      history.push("/users");
    } catch (err) {
      console.log(err);
      setError("Senha ou e-mail inválido");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <StyledSection>
      <StyledDiv>
        <StyledStrong>Login</StyledStrong>
        <form onSubmit={handleLogin}>
          {error && <StyledError>{error}</StyledError>}
          <div>
            <StyledLabel htmlFor="email">E-mail</StyledLabel>
            <StyledInput
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="password">Senha</StyledLabel>
            <StyledInput
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <StyledButton type="submit">Entrar</StyledButton>
        </form>
      </StyledDiv>
    </StyledSection>
  );
};

export default Login;
