import { useSelector } from 'react-redux';
import {
  OneContactDeleteButton,
  StyledOneContactLi,
} from './OneContact.styled';
import PropTypes from 'prop-types';
import { selectDeletedId, selectIsLoading } from 'redux/selectors';

export const OneContact = ({ id, name, number, deleteContact }) => {
  const loading = useSelector(selectIsLoading);
  const deletedId = useSelector(selectDeletedId);

  return (
    <StyledOneContactLi>
      <div>
        <p>{name}:</p>
        <p>{number}</p>
      </div>
      {loading && deletedId === id ? (
        <OneContactDeleteButton>Deleting...</OneContactDeleteButton>
      ) : (
        <OneContactDeleteButton type="button" onClick={() => deleteContact(id)}>
          Delete contact
        </OneContactDeleteButton>
      )}
    </StyledOneContactLi>
  );
};

OneContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
