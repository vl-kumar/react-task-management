import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../../model/category";

export interface CategoryState {
  categoryList: Array<Category>;
}

export interface CategoryAction {
  category: Category;
}

export interface RemoveCategoryAction {
  id: string;
}

// const existingCategoryList: Array<Category> =
//   JSON.parse(localStorage.getItem("categories") || "") || [];

const initialState: CategoryState = {
  categoryList: [],
};

const searchSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryList(state, action: PayloadAction<CategoryState>) {
      state.categoryList = [...action.payload.categoryList];
    },
    addCategory(state, action: PayloadAction<CategoryAction>) {
      const existingCategoryList: Array<Category> =
        JSON.parse(localStorage.getItem("categories") || "[]") || [];
      state.categoryList = [...existingCategoryList, action.payload.category];
      localStorage.setItem("categories", JSON.stringify(state.categoryList));
    },
    editCategory(state, action: PayloadAction<CategoryAction>) {
      const existingCategoryList: Array<Category> =
        JSON.parse(localStorage.getItem("categories") || "[]") || [];
      state.categoryList = existingCategoryList.map((category) =>
        category.id === action.payload.category.id
          ? action.payload.category
          : category
      );
      localStorage.setItem("categories", JSON.stringify(state.categoryList));
    },
    deleteCategory(state, action: PayloadAction<RemoveCategoryAction>) {
    

      state.categoryList = [
        ...state.categoryList.filter(
          (category) => category.id !== action.payload.id
        ),
      ];

      localStorage.setItem("categories", JSON.stringify(state.categoryList));
    },
  },
});

export const { addCategory, deleteCategory, editCategory, setCategoryList } =
  searchSlice.actions;
export default searchSlice.reducer;
