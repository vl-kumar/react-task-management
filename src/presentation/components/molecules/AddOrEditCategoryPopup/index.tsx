import { useAppDispatch } from "presentation/hooks/useAppDispatch";
import { memo, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Popup from "../Popup";
import {
  Button,
  HeaderText,
  Row,
  CategoryForm,
  CategoryInput,
  Title,
  TitleRow,
} from "./style";
import { AddIcon, CloseIcon } from "icons";
import { Category } from "model/category";
import { addCategory, editCategory } from "presentation/store/slices/Category-slice";
interface AddOrEditCategoryPopupProps {
  selectedEditCategory?: Category;
  resetEditCategory: () => void;
}

const intialCategory: Category = {
  title: "",
  id: "",
};
const AddOrEditCategoryPopup: React.FC<AddOrEditCategoryPopupProps> = memo(({
  selectedEditCategory,
  resetEditCategory,
}) => {

  const [isModalopen, setModalOpen] = useState(false);

  const [category, setCategory] = useState<Category>(
    selectedEditCategory ? selectedEditCategory : intialCategory
  );


  useEffect(()=>{
    if(selectedEditCategory){
      setCategory(selectedEditCategory)
    }
  }, [selectedEditCategory])
  const dispatch = useAppDispatch();

  const addCategoryItem = () => {
    const newCategory: Category = {
      ...category,
      id: uuidv4(),
    };

    dispatch(addCategory({ category: newCategory }));
  };

  const editCategoryItem = () => {
    const editCategoryItem: Category = {
      ...category
    };
    dispatch(editCategory({ category: editCategoryItem }));
    resetEditCategory();
  };

  const closePopup = () => {
    setModalOpen(false);
    setCategory(intialCategory);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (selectedEditCategory) {
      editCategoryItem();
    } else {
      addCategoryItem();
    }
    setCategory(intialCategory);
    closePopup();
  };

  const handleChange = (e: any) => {
    setCategory({ ...category, title: e.target.value });
  };
  

  return (
    <div>
      <Row>
        <HeaderText>Categories</HeaderText>
        <AddIcon
          onClick={() => {
            setModalOpen(true);
          }}
          width={"32px"}
          height={"32px"}
          className="icon"
        />
      </Row>
      {(isModalopen || selectedEditCategory) && (
        <Popup>
          <CategoryForm onSubmit={handleSubmit} className="form-container">
            <TitleRow>
              <Title>{selectedEditCategory? 'Edit Category' : 'Add Category'}</Title>
              <CloseIcon
                onClick={() => {
                  setModalOpen(false);
                  resetEditCategory();
                }}
                className="icon"
                width={24}
                height={24}
              />
            </TitleRow>
            <CategoryInput
              type="text"
              placeholder="Category"
              value={category.title}
              name="title"
              onChange={handleChange}
              maxLength={35}
            />
            <Button
              type="submit"
              className="button"
              disabled={
                category.title ? false : true
              }
              value={"Submit"}
            >
              Submit
            </Button>
          </CategoryForm>
        </Popup>
      )}
    </div>
  );
});

export default AddOrEditCategoryPopup;
