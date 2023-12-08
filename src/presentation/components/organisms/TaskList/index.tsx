import React, { memo, useState } from "react";
import TaskItem from "presentation/components/molecules/TaskItem";
import { Task } from "model/task";
import { Container, TaskGrid } from "./style";
import AddOrEditTaskPopup from "presentation/components/molecules/AddOrEditTaskPopup";

interface TaskListProps {
  taskList: Array<Task>;
  completedTaskList: Array<Task>;
}

const TaskList: React.FC<TaskListProps> = memo(({ taskList }) => {
  const [editTask, setEditTask] = useState<Task| undefined>(undefined)

  const editTaskItem = (task: Task)=>{
    setEditTask(task)
  }

  const resetEditTask = () => {
    setEditTask(undefined)
  }


  return (
    <Container>
      <AddOrEditTaskPopup selectedEditTask={editTask} resetEditTask={resetEditTask}/>
      <TaskGrid>
        {taskList.map((task) => (
          <TaskItem key={task.id} task={task} editTaskItem={editTaskItem}/>
        ))}
      </TaskGrid>
    </Container>
  );
});

export default TaskList;
