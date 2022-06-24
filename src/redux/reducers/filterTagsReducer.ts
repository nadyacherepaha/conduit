import { createSlice } from '@reduxjs/toolkit';
import filterTags from '../actions/filterTagsAction';

export interface FilterTagsState {
  entities: any;
  loading: 'idle' | 'pending' | 'successful' | 'failed';
  tag: string;
}

const initialState: FilterTagsState = {
  entities: [],
  loading: 'idle',
  tag: '',
};

interface FulfilledAction {
  payload: [];
  meta: {
    requestId: string,
    arg: string,
  };
}

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

  extraReducers: (builder) => {
    builder.addCase(filterTags.pending, (state: FilterTagsState) => {
      state.loading = 'pending';
    });

    builder.addCase(
      filterTags.fulfilled,
      (state: FilterTagsState, action: FulfilledAction) => {
        state.entities = action.payload;
        state.loading = 'successful';
        state.tag = action.meta.arg;
      }
    );

    builder.addCase(filterTags.rejected, (state: FilterTagsState) => {
      state.loading = 'failed';
    });
  },
});

export const filterTagsAction = filterTagsSlice.actions;
export const addSelectedTag = filterTagsAction.addSelectedTag;
export const deleteSelectedTag = filterTagsAction.deleteSelectedTag;
export default filterTagsSlice.reducer;
