import { RootState } from './../store/store';

function getFilteredTags(state: RootState) {
  return state.filterTags;
}

export default getFilteredTags;
