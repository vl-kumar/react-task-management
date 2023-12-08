import { Category } from "model/category";
import { Task } from "model/task";
import { useAppDispatch } from "presentation/hooks/useAppDispatch";
import { setCategoryList } from "presentation/store/slices/Category-slice";
import { setTaskList } from "presentation/store/slices/Task-slice";
import { memo, useEffect } from "react";

interface CardTemplateProps {
  children: React.ReactNode;
}
const AppConfiguration: React.FC<CardTemplateProps> = memo(({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const tasks: Array<Task> =
        JSON.parse(localStorage.getItem("tasks") || "") || [];
      dispatch(setTaskList({ taskList: tasks }));
    }else {
      localStorage.setItem('tasks', JSON.stringify([]))
    }
    if(localStorage.getItem("categories")){
      const categories: Array<Category> =
        JSON.parse(localStorage.getItem("categories") || "") || [];
      dispatch(setCategoryList({ categoryList: categories }));
    } else {
      localStorage.setItem('categories', JSON.stringify([]))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return <>{children}</>;
});

export default AppConfiguration;
