// src/components/Dialog.jsx
import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogContainer = styled.div`
  position: relative; /* Added to allow positioning of the close button */
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const DialogButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #007bff;
  color: white;
  &:hover {
    background: #0056b3;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #000;
  &:hover {
    color: #007bff;
  }
`;

const Dialog = ({ onClose, onConfirm }) => (
  <Overlay>
    <DialogContainer className='flex flex-col justify-center items-center'>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <p>Are you sure you want to logout?</p>
      <DialogButtons className='flex gap-4'>
        <Button onClick={onConfirm}>Yes</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogButtons>
    </DialogContainer>
  </Overlay>
);

export default Dialog;
