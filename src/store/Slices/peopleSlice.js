import { createSlice } from '@reduxjs/toolkit';
import { peopleApi } from '@/services/peopleApi';

const initialState = {
  page: 1, // Default page number
  currentPerson: null,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    clearCurrentPerson(state) {
      state.currentPerson = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      peopleApi.endpoints.getPersonById.matchFulfilled,
      (state, { payload }) => {
        state.currentPerson = payload;
      }
    );
  },
});

export const { setPage, clearCurrentPerson } = peopleSlice.actions;
export default peopleSlice.reducer;
