import { AddContact } from './AddContact/AddContact';
import { AllContacts } from './AllContacts/AllContacts';
import { SearchContacts } from './SearchContact/SearchContact';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';
import { toast } from 'react-toastify';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Oops, something went wrong');
    }
  }, [error]);

  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <StyledHeaderH1>PHONEBOOK</StyledHeaderH1>
      <div>
        <AddContact />
        <SearchContacts />
        {!contacts.length && !error && (
          <StyledPlug>There are no contacts yet😭</StyledPlug>
        )}
        {error && <h2>{error}</h2>}
        <AllContacts />
      </div>
    </div>
  );
};

const StyledPlug = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 18px;
`;

const StyledHeaderH1 = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  line-height: 1.2;
  margin-bottom: 10px;
`;
