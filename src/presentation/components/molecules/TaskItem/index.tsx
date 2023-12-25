import { useAppDispatch } from "presentation/hooks/useAppDispatch";
import { Task } from "../../../../model/task";
import { deleteTask, editTask } from "presentation/store/slices/Task-slice";
import { BoldText, CardRow, Container, Content, IconSection } from "./style";
import { DeleteIcon, EditIcon } from "icons";
import { memo } from "react";

interface TaskItemProps {
  task: Task;
  editTaskItem: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = memo(({ task, editTaskItem }) => {
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(
      editTask({
        task: {
          ...task,
          completed: !task.completed,
          date: document.lastModified,
        },
      })
    );
  };

  function deleteTaskItem() {
    dispatch(deleteTask({ id: task.id }));
  }

  return (
    <Container>
      <CardRow>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            className="checkbox-field"
            checked={task.completed}
            onChange={handleChange}
          />
        </div>
        <Content>
          <div>
            <BoldText>Name:</BoldText> {task.title}
          </div>
          <div>
            <BoldText>Description:</BoldText> {task.description}
          </div>
          <div>
            <BoldText>Category:</BoldText> {task.category}
          </div>
          <div>
            <BoldText>Last Modified:</BoldText> {task.date}
          </div>
          <div>
            <BoldText>Completed:</BoldText> {task.completed ? 'true': 'false'}
          </div>
        </Content>
      </CardRow>
      <IconSection>
        <EditIcon
          width={"24px"}
          className="icon"
          onClick={() => editTaskItem(task)}
        />
        <DeleteIcon
          width={"24px"}
          className="icon"
          onClick={() => deleteTaskItem()}
        />
      </IconSection>
    </Container>
  );
});

export default TaskItem;
