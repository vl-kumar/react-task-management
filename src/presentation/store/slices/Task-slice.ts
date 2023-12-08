import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "model/task";

export interface TaskState {
  taskList: Array<Task>;
}

export interface TaskAction {
  task: Task;
}

export interface RemoveCategoryAction {
  id: string;
}

const existingTasks: Array<Task> = [];

const initialState: TaskState = {
  taskList: existingTasks.length > 0 ? existingTasks : [],
};

const searchSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskList(state, action: PayloadAction<TaskState>) {
      state.taskList = [...action.payload.taskList];
    },
    addTask(state, action: PayloadAction<TaskAction>) {
      state.taskList = [...state.taskList, action.payload.task];
      const existingTasks: Array<Task> =
        JSON.parse(localStorage.getItem("tasks") || '[]') || [];
      state.taskList = [...existingTasks, action.payload.task];
      localStorage.setItem("tasks", JSON.stringify(state.taskList));
    },
    editTask(state, action: PayloadAction<TaskAction>) {
      state.taskList = state.taskList.map((task) =>
      task.id === action.payload.task.id ? action.payload.task : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.taskList));
    },
    deleteTask(state, action: PayloadAction<RemoveCategoryAction>) {
      state.taskList = [
        ...state.taskList.filter(
          (task) => task.id !== action.payload.id
        ),
      ];
      localStorage.setItem("tasks", JSON.stringify(state.taskList));
    },
  },
});

export const { addTask, deleteTask, editTask, setTaskList } = searchSlice.actions;
export default searchSlice.reducer;
