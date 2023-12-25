import React, { memo } from "react";
import { Task } from "model/task";
import { TD, TH } from "./style";

interface TaskRowProps {
  rowContent: Task;
  isHeader?: boolean;
}

const TableContent: React.FC<TaskRowProps> = memo(
  ({ rowContent, isHeader }) => {

    return (
      <tr>
        {isHeader &&
          Object.entries(rowContent).map(([key, value], index) => (
            <>
              {key !== "id" && key !== "completed" && (
                <TH key={index + value}>
                  {key}
                </TH>
              )}
            </>
          ))}

        {!isHeader &&
          Object.entries(rowContent).map(([key, value], index) => (
            <>
              {key !== "id" && key !== "completed" &&  (
                <TD key={index + value}>
                  {value.toString()}
                </TD>
              )}
            </>
          ))}
      </tr>
    );
  }
);

export default TableContent;
