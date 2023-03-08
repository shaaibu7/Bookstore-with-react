import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [

  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checktheStatus: (state) => {
      if (state.categories.length === 0) {
        return {
          ...state,
          categories: [...state.categories, 'Under construction'],
        };
      }
      return {
        ...state,
        categories: state.categories,
      };
    },
  },
});

export const { checktheStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
