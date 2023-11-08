import { useDispatch, useSelector } from 'react-redux';
import {
  OneContactDeleteButton,
  StyledOneContactLi,
} from './OneContact.styled';
import PropTypes from 'prop-types';
import {
  selectDeletedId,
  selectIsEditing,
  selectIsLoading,
} from 'redux/selectors';
import { EditContactThunk } from 'redux/operations';
import { changeIsEditing } from 'redux/contactsSlice';
import { useModal } from 'hooks/useModal';
import Modal from 'components/Modal/Modal';
import styled from 'styled-components';

export const OneContact = ({ id, name, number, deleteContact }) => {
  const loading = useSelector(selectIsLoading);
  const deletedId = useSelector(selectDeletedId);
  const dispatch = useDispatch();

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <StyledOneContactLi>
        <div>
          <p>{name}:</p>
          <p>{number}</p>
          <StyledSpanModal onClick={openModal}>Edit✏️</StyledSpanModal>
        </div>
        {loading && deletedId === id ? (
          <OneContactDeleteButton>Deleting...</OneContactDeleteButton>
        ) : (
          <OneContactDeleteButton
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete contact
          </OneContactDeleteButton>
        )}
      </StyledOneContactLi>
      {isOpen ? <Modal close={closeModal} name={name} number={number} /> : null}
    </>
  );
};

const StyledSpanModal = styled.span`
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: white;
  }
`;

OneContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
