import { Category } from "model/category";
import { Task } from "model/task";
import TaskList from "presentation/components/organisms/TaskList";
import CardTemplate from "presentation/components/templates/CardTemplate";
import { useAppDispatch } from "presentation/hooks/useAppDispatch";
import { useAppSelector } from "presentation/hooks/useAppSelector";
import { setCategoryList } from "presentation/store/slices/Category-slice";
import {
  setTaskList,
} from "presentation/store/slices/Task-slice";
import { useEffect } from "react";

function TaskListScreen() {
  const { taskList } = useAppSelector((state) => state.task);


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
  }, [ dispatch]);



  return (
    <div className="container">
      <CardTemplate>
        <TaskList
          taskList={taskList}
          completedTaskList={[]}
        />
      </CardTemplate>
    </div>
  );
}

export default TaskListScreen;
