import React, { useState, useEffect } from "react";

import axios from "../../services/api";

import Modal from "react-responsive-modal";

import {
  StyledSection,
  StyledUl,
  StyledLi,
  StyledUlButton,
  StyledPagination,
  StyledDivOptions,
  StyledButtonCancel,
  StyledButtonConfirm
} from "./styles";

import User from "../../components/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get(`/users?page=${actualPage}?delay=2`);
      const data = response.data;
      setUsers(data.data);

      setPageNumbers([]);
      for (let i = 1; i <= data.total_pages; i++) {
        setPageNumbers(pageNumbers => [...pageNumbers, i]);
      }
    };

    loadUsers();
  }, [actualPage]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get(`/users?page=${actualPage}?delay=2`);
      const data = response.data;
      setUsers(data.data);

      setPageNumbers([]);
      for (let i = 1; i <= data.total_pages; i++) {
        setPageNumbers(pageNumbers => [...pageNumbers, i]);
      }
    };

    loadUsers();
  }, [actualPage]);

  const onCloseModal = () => {
    setOpen(false);
    setIdToDelete(0);
  };

  const confirmModal = async () => {
    setOpen(false);
    if (idToDelete) {
      try {
        await axios.delete(`/users/${idToDelete}?delay=2`);
        setUsers(users.filter(user => user.id !== idToDelete));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const deleteUser = async id => {
    setIdToDelete(id);
    setOpen(true);
  };

  return (
    <StyledSection>
      <Modal open={open} onClose={onCloseModal}>
        <h2>Deleção</h2>
        <p>Tem certeza que deseja excluir o usuário?</p>
        <StyledDivOptions>
          <StyledButtonConfirm onClick={confirmModal}>
            Confirmar
          </StyledButtonConfirm>
          <StyledButtonCancel onClick={onCloseModal}>
            Cancelar
          </StyledButtonCancel>
        </StyledDivOptions>
      </Modal>
      <StyledUl>
        {!!users.length &&
          users.map(user => (
            <User key={user.id} user={user} deleteUser={deleteUser} />
          ))}
      </StyledUl>
      <StyledUlButton>
        {pageNumbers.map(pageNumber => (
          <StyledLi key={pageNumber} id={pageNumber}>
            <StyledPagination onClick={() => setActualPage(pageNumber)}>
              {pageNumber}
            </StyledPagination>
          </StyledLi>
        ))}
      </StyledUlButton>
    </StyledSection>
  );
};

export default Users;
