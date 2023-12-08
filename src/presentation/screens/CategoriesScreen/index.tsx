import { Category } from "model/category";
import { Task } from "model/task";
import Categories from "presentation/components/organisms/Categories";
import CardTemplate from "presentation/components/templates/CardTemplate";
import { useAppDispatch } from "presentation/hooks/useAppDispatch";
import { setCategoryList } from "presentation/store/slices/Category-slice";
import { setTaskList } from "presentation/store/slices/Task-slice";
import { useEffect } from "react";

const CategoriesScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const tasks: Array<Task> =
        JSON.parse(localStorage.getItem("tasks") || "") || [];
      const categories: Array<Category> =
        JSON.parse(localStorage.getItem("categories") || "") || [];
      dispatch(setTaskList({ taskList: tasks }));
      dispatch(setCategoryList({ categoryList: categories }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <CardTemplate>
      <Categories />
    </CardTemplate>
  );
};

export default CategoriesScreen;
