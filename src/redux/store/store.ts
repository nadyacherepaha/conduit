import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../reducers/authReducer';
import filterTagsReducer from '../reducers/filterTagsReducer';

const reducers = {
  user: userReducer,
  filterTags: filterTagsReducer,
};

const rootReducer = combineReducers({
  ...reducers,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export default setupStore;
