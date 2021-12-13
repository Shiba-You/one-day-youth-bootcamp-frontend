
   
import React from "react";
import { Task } from "../";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
// TODO: リアクトコンポーネント FC ではなくて VFC の方が良いのでは？
// TODO: children がない場合 VFC, ある場合は FC ?
// 今回は VFC でも良い
export const TaskTable: React.FC<Props> = ({ tasks, setTasks }) => {

  return (
    <table>
      {tasks.map((task, index) => (
        // TODO: ここで todo-${index} で key を文字列にしているのは，再レンダリングされる時に被らないようにするため？
        <tr key={`todo-table-${index}`}>
          <td key={`todo-table-label-${index}`}>{ task.label }</td>
          { task.isDone ? <td key={`todo-table-isDone-${index}`}> 終了 </td> : <td key={`todo-table-isDone-${index}`}>未着手</td> }
          <td key={`todo-table-atChenged-${index}`}>{ task.atChanged }</td>
        </tr>
      ))}
    </table>
  );
};
