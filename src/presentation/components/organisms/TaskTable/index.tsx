import React, { memo, useMemo } from "react";
import { Task } from "model/task";
import { Container, NoContent } from "./style";
import TableRow from "presentation/components/molecules/TableContent";

interface TaskListProps {
  taskList: Array<Task>;
}

const TaskTable: React.FC<TaskListProps> = memo(({ taskList }) => {
  const TaskTable = useMemo(() => {
    return (
      <>
        <table>
          <thead>
            <TableRow isHeader={true} rowContent={taskList[0] ?? []} />
          </thead>
          <tbody>
            {taskList.map((rowContent, rowID) => (
              <TableRow rowContent={rowContent} key={rowID} />
            ))}
          </tbody>
        </table>

        {taskList.length === 0 && (
          <NoContent>
            <h3> There is no Task. Start Adding..</h3>
          </NoContent>
        )}
      </>
    );
  }, [taskList]);

  return <Container>{TaskTable}</Container>;
});

export default TaskTable;
