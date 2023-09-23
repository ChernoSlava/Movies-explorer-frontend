import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import notSuccessIco from "../../images/InfoPopupDon'tWork.svg";
import successIco from '../../images/InfoPopupWork.svg';

import {
  PopupCloseButton,
  PopupContainer,
  PopupDescription,
  PopupIcon,
  PopupStyled,
} from './styled';

export function Popup({ isOpen, onClose, text, isSuccess }) {
  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    // return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <PopupStyled onClick={onClose} opened={isOpen}>
      <PopupContainer onClick={handleOverlay}>
        <PopupCloseButton type="button" onClick={onClose} />
        <PopupIcon
          src={isSuccess ? successIco : notSuccessIco}
          alt={
            isSuccess ? 'Иконка - всё успешно' : 'Иконка - что-то пошло не так'
          }
        />
        <PopupDescription>{text}</PopupDescription>
      </PopupContainer>
    </PopupStyled>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};
