import { createSlice } from '@reduxjs/toolkit';

export interface FilterTagsState {
  tag: string;
}

const initialState: FilterTagsState = {
  tag: '',
};

const filterTagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addSelectedTag(state, action) {
      state.tag = action.payload;
    },

    deleteSelectedTag(state) {
      state.tag = '';
    },
  },
});

export const filterTagsAction = filterTagsSlice.actions;
export const addSelectedTag = filterTagsAction.addSelectedTag;
export const deleteSelectedTag = filterTagsAction.deleteSelectedTag;
export default filterTagsSlice.reducer;
