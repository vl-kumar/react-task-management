import TaskList from "presentation/components/organisms/TaskList";
import CardTemplate from "presentation/components/templates/CardTemplate";
import { useAppSelector } from "presentation/hooks/useAppSelector";

function TaskListScreen() {
  const { taskList } = useAppSelector((state) => state.task);



  return (
    <div className="container">
      <CardTemplate>
        <TaskList
          taskList={taskList}
        />
      </CardTemplate>
    </div>
  );
}

export default TaskListScreen;
