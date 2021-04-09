import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import schema from '../constants.jsx';

const Wrapper = styled.div`
  position: fixed;
  display: table;
  background: #fff;
  padding: 2vh 2vw 1vh 2vw;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-width: 10vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const Options = styled.div`
  height: 30vh;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  width: max(10vw, 50px);
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  height: 5vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  border-radius: 5px;
  color: #424242;
  ${schema.hoverEffect}
`;

const TabModal = (props) => {
  const { toggleModal, tabName } = props;

  const handleTransfer = (event) => {
    event.preventDefault();
    toggleModal();

    if (tabName === 'saved') {
      // post to applied jobs
    } else {
      // do something that doesn't exist yet
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    toggleModal();
    // call delete function in future
  };

  return ReactDOM.createPortal(
    <Wrapper onMouseDown={(event) => event.stopPropagation()}>
      <Options>
        <Button onClick={handleTransfer}>{ tabName === 'saved' ? 'Apply' : 'Interview' }</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </Options>
    </Wrapper>,
    document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
  );
};

export default TabModal;
