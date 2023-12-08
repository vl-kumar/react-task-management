import { useAppSelector } from "presentation/hooks/useAppSelector";
import { Container, MainRow, NoContent } from "./style";
import { memo, useMemo, useState } from "react";
import CategoryItem from "presentation/components/molecules/CategoryItem";
import { Category } from "model/category";
import AddOrEditCategoryPopup from "presentation/components/molecules/AddOrEditCategoryPopup";

const Categories = memo(() => {
  const categoryList = useAppSelector((state) => state.category.categoryList);
  const [editCategory, setEditCategory] = useState<Category | undefined>(
    undefined
  );

  const editCategoryItem = (category: Category) => {
    setEditCategory(category);
  };

  const resetEditTask = () => {
    setEditCategory(undefined);
  };
 
  const CategoryList = useMemo(() => {
    return <>
      {categoryList.length === 0 && 
        
        <NoContent>
          <h3> There is no Category. Start Adding..</h3>
        </NoContent>
        }
        {
          categoryList.map((category) => (
            <CategoryItem category={category} editCategoryItem={editCategoryItem} />
          ))
        }
    </>
    
  }, [categoryList]);
  return (
    <Container>
      <MainRow>
        {/* <HeaderText>Categories</HeaderText> */}
        <AddOrEditCategoryPopup
          selectedEditCategory={editCategory}
          resetEditCategory={resetEditTask}
        />
      </MainRow>
      {CategoryList}
    </Container>
  );
})

export default Categories;
