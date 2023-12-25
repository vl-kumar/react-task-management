import { Task } from "model/task";
import Pagination from "presentation/components/molecules/Pagination";
import TaskList from "presentation/components/organisms/TaskList";
import TaskTable from "presentation/components/organisms/TaskTable";
import CardTemplate from "presentation/components/templates/CardTemplate";
import { useAppSelector } from "presentation/hooks/useAppSelector";
import { useCallback, useEffect, useMemo, useState } from "react";

function TaskListScreen() {
  const { taskList: tasks } = useAppSelector((state) => state.task);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [totalPageCount, setTotalPageCount] = useState<number>(5);
  const [pageSize, setPageSize] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [taskList, setTaskList] = useState<Array<Task>>([]);

  useEffect(() => {
    setTaskList(tasks);
    setTotalPageCount(Math.ceil(tasks.length / pageSize));
  }, [tasks, pageSize]);

  useEffect(()=>{
    const taskData = tasks.filter((data) => {
      if(JSON.stringify(data).toLowerCase().includes(searchTerm.toLowerCase()) ) {
        return data
      }
    })

    if(taskData.length > 0) {
      setTaskList(taskData)
      setTotalPageCount(Math.ceil(taskData.length / pageSize));
      setCurrentPage(1);
    } else {
      setTaskList(tasks);
      setTotalPageCount(Math.ceil(tasks.length / pageSize));
      setCurrentPage(1);
    }
  }, [tasks, searchTerm, pageSize])

  useEffect(() => {
    applyTaskFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, totalPageCount]);

  const applyTaskFilter = useCallback(() => {
    const filterArray =  searchTerm.length > 0 ? taskList: tasks

    const array = filterArray.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    setTaskList(array);
  }, [searchTerm.length, taskList, tasks, currentPage, pageSize]);

  const PaginationElement = useMemo(() => {
    return (
      <>
        {taskList?.length && (
          <Pagination
            currentPage={currentPage}
            pageCount={totalPageCount}
            setCurrentPage={setCurrentPage}
          />
        )}
      </>
    );
  }, [currentPage, totalPageCount, taskList?.length]);

  return (
    <div className="container">
      <CardTemplate>
        <TaskList taskList={taskList} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        {PaginationElement}
        <TaskTable taskList={taskList} />

      </CardTemplate>
    </div>
  );
}

export default TaskListScreen;
