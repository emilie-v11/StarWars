import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { peopleApi } from '@/services/peopleApi';
import type { Person } from '../../types/person';

interface PeopleState {
  page: number;
  currentPerson: Person | null;
}

const initialState: PeopleState = {
  page: 1,
  currentPerson: null,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
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
