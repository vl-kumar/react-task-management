import React, { memo, useMemo, useState } from "react";
import TaskItem from "presentation/components/molecules/TaskItem";
import { Task } from "model/task";
import { Container, NoContent, TaskGrid } from "./style";
import AddOrEditTaskPopup from "presentation/components/molecules/AddOrEditTaskPopup";

interface TaskListProps {
  taskList: Array<Task>;
}

const TaskList: React.FC<TaskListProps> = memo(({ taskList }) => {
  const [editTask, setEditTask] = useState<Task | undefined>(undefined);

  const editTaskItem = (task: Task) => {
    setEditTask(task);
  };

  const resetEditTask = () => {
    setEditTask(undefined);
  };

  const TaskList = useMemo(() => {
    return (
      <>
        <TaskGrid>
          {taskList.map((task) => (
            <TaskItem key={task.id} task={task} editTaskItem={editTaskItem} />
          ))}
        </TaskGrid>

        {taskList.length === 0 && (
          <NoContent>
            <h3> There is no Task. Start Adding..</h3>
          </NoContent>
        )}
      </>
    );
  }, [taskList]);

  return (
    <Container>
      <AddOrEditTaskPopup
        selectedEditTask={editTask}
        resetEditTask={resetEditTask}
      />
      {TaskList}
    </Container>
  );
});

export default TaskList;
