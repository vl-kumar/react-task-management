import { Task } from "model/task";
import { useAppDispatch } from "presentation/hooks/useAppDispatch";
import { useAppSelector } from "presentation/hooks/useAppSelector";
import { addTask, editTask } from "presentation/store/slices/Task-slice";
import { memo, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Popup from "../Popup";
import {
  Button,
  HeaderText,
  Row,
  SelectDropdown,
  TaskForm,
  TaskInput,
  Title,
  TitleRow,
} from "./style";
import { AddIcon, CloseIcon } from "icons";
interface AddOrEditTaskPopupProps {
  selectedEditTask?: Task;
  resetEditTask: () => void;
}

const intialTask = {
  title: "",
  category: "",
  completed: false,
  date: "",
  description: "",
  id: "",
};
const AddOrEditTaskPopup: React.FC<AddOrEditTaskPopupProps> = memo(({
  selectedEditTask,
  resetEditTask,
}) => {

  const [isModalopen, setModalOpen] = useState(false);

  const [task, setTask] = useState<Task>(
    selectedEditTask ? selectedEditTask : intialTask
  );


  useEffect(()=>{
    if(selectedEditTask){
      setTask(selectedEditTask)
    }
  }, [selectedEditTask])
  const { categoryList } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();

  const handleSelectCategoryChange = (e: any) => {
    setTask({ ...task, category: e.target.value });
  };

  const addTaskItem = () => {
    const newTask: Task = {
      ...task,
      id: uuidv4(),
      date: document.lastModified,
    };

    dispatch(addTask({ task: newTask }));
  };

  const editTaskItem = () => {
    const editedTask: Task = {
      ...task,
      date: document.lastModified,
    };

    dispatch(editTask({ task: editedTask }));
    resetEditTask();
  };

  const closePopup = () => {
    setModalOpen(false);
    setTask(intialTask);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (selectedEditTask) {
      editTaskItem();
    } else {
      addTaskItem();
    }
    setTask(intialTask);
    closePopup();
  };

  const handleChange = (e: any) => {
    setTask({ ...task, title: e.target.value });
  };

  const handleDescriptionChange = (e: any) => {
    setTask({ ...task, description: e.target.value });
  };

  return (
    <div>
      <Row>
        <HeaderText>Tasks</HeaderText>
        <AddIcon
          onClick={() => {
            setModalOpen(true);
          }}
          width={"24px"}
          height={"24px"}
          className="icon"
        />
      </Row>
      {(isModalopen || selectedEditTask) && (
        <Popup>
          <TaskForm onSubmit={handleSubmit} className="form-container">
            <TitleRow>
              <Title>{selectedEditTask? 'Edit Task' : 'Add Task'}</Title>
              <CloseIcon
                onClick={() => {
                  setModalOpen(false);
                  resetEditTask();
                }}
                className="icon"  
                width={24}
                height={24}
              />
            </TitleRow>
            <TaskInput
              type="text"
              placeholder="Add Task..."
              value={task.title}
              name="title"
              onChange={handleChange}
              maxLength={35}
            />
            <TaskInput
              type="text"
              placeholder="Description..."
              maxLength={50}
              value={task.description}
              name="title"
              onChange={handleDescriptionChange}
            />
            <SelectDropdown
              name="tags"
              value={task.category}
              className="select-input"
              onChange={handleSelectCategoryChange}
            >
              <option value="">Select Category</option>
              {categoryList.map((option) => (
                <option key={option.id} value={option.title}>
                  {option.title}
                </option>
              ))}
            </SelectDropdown>
            <Button
              type="submit"
              className="button"
              disabled={
                task.title && task.title && task.category ? false : true
              }
              value={"Submit"}
            >
              Submit
            </Button>
          </TaskForm>
        </Popup>
      )}
    </div>
  );
});

export default AddOrEditTaskPopup;
