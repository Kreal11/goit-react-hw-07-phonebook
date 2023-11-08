import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { StyledWrapperModal, StyledWrapperOverlay } from './StyledModal';
import { useForm } from 'react-hook-form';

const Modal = ({ close, name, number }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name,
      number,
    },
  });

  const submit = () => {};

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
        <button onClick={close}>✖️</button>
        <form action="">
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
          <button>Change contact</button>
        </form>
      </StyledWrapperModal>
    </StyledWrapperOverlay>
  );
};

export default Modal;
