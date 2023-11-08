import {
  EditContactThunk,
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
    deletedId: null,
    isEditing: false,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setCurrentId: (state, { payload }) => {
      state.contacts.deletedId = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload.id
        );
        state.contacts.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
        state.contacts.isLoading = false;
      })
      .addCase(EditContactThunk.fulfilled, (state, { payload }) => {
        const contactIndex = state.contacts.items.findIndex(
          item => item.id === payload.id
        );
        state.contacts.items[contactIndex] = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        (state, { payload }) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        (state, { payload }) => {
          state.contacts.error = payload;
          state.contacts.isLoading = false;
        }
      );
  },
});

export const { setCurrentId, changeIsEditing } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
