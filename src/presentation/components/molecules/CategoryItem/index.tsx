import { Category } from "model/category";
import { MainRow } from "./style";
import { DeleteIcon, EditIcon } from "icons";
import { useAppDispatch } from "presentation/hooks/useAppDispatch";
import {
  deleteCategory,
} from "presentation/store/slices/Category-slice";

interface CategoryItemProps {
  category: Category;
  editCategoryItem: (category: Category) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, editCategoryItem }) => {
  const dispatch = useAppDispatch();

  function deleteCategoryItem() {
    dispatch(deleteCategory({ id: category.id }));
  }

  function editCategory() {
    editCategoryItem(category);
  }

  return (
    <MainRow>
      <div>{category.title}</div>
      <div>
        <EditIcon width={"24px"} className="icon" onClick={editCategory} />
        <DeleteIcon
          width={"24px"}
          className="icon"
          onClick={deleteCategoryItem}
        />
      </div>
    </MainRow>
  );
};

export default CategoryItem;
