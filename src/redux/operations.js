import { createAsyncThunk } from '@reduxjs/toolkit';

const { default: axios } = require('axios');

axios.defaults.baseURL = 'https://654a30b8e182221f8d52b0a2.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  'fetchAllContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
