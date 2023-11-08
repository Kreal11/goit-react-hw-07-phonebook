import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  StyledModalForm,
  StyledWrapperModal,
  StyledWrapperOverlay,
} from './StyledModal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editContactThunk } from 'redux/operations';

const Modal = ({ close, name, number, id }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name,
      number,
    },
  });

  const submit = ({ name, number }) => {
    dispatch(editContactThunk({ name, number, id }));
    close();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
        toast.info('Wow, your keyboard has Escape button!');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  const handleClickOut = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return (
    <StyledWrapperOverlay onClick={handleClickOut}>
      <StyledWrapperModal>
        <div>
          <h2>Edit your contact now!</h2>
          <p>(without sms and registration)</p>
        </div>
        <StyledModalForm action="" onSubmit={handleSubmit(submit)}>
          <input
            {...register('name')}
            type="text"
            placeholder="Enter new name"
          />
          <input
            {...register('number')}
            type="tel"
            placeholder="Enter new phone number"
          />
          <div>
            <button $color="green">Save</button>
            <button $color="red" onClick={close}>
              Cancel
            </button>
          </div>
        </StyledModalForm>
      </StyledWrapperModal>
    </StyledWrapperOverlay>
  );
};

export default Modal;
