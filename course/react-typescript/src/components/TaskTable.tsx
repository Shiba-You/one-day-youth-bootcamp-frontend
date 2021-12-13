import React from "react";
import { Task } from "../";
import { timeArrange } from "../utils/index";

type Props = {
  tasks: Task[];
};

export const TaskTable: React.FC<Props> = ({ tasks }) => {

  return (
    <table>
      <tbody>
        {tasks.map((task, index) => (
          // TODO: ここで todo-${index} で key を文字列にしているのは，再レンダリングされる時に被らないようにするため？
          <tr key={`todo-table-${index}`}>
            <td key={`todo-table-label-${index}`}>{ task.label }</td>
            { task.isDone ? 
              <td key={`todo-table-isDone-${index}`}> 終了 </td> :
              <td key={`todo-table-isDone-${index}`}>未着手</td>
            }
            { typeof(task.atChanged) == "string" ?
              <td key={`todo-table-atChenged-${index}`}>{ task.atChanged }</td> :
              <td key={`todo-table-atChenged-${index}`}>{ timeArrange(task.atChanged) }</td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};
