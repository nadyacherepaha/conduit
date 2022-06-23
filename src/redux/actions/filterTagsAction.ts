import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../services/getData';

const filterTags = createAsyncThunk('tags/filter', async (tag: string) => {
  const result = await getData(
    `https://api.realworld.io/api/articles?limit=10&offset=0&tag=${tag}`
  );
  return result;
});

export default filterTags;
