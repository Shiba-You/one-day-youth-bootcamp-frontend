import React from 'react';
import { Task } from '../';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

// TODO: リアクトコンポーネント FC ではなくて VFC の方が良いのでは？
// TODO: children がない場合 VFC, ある場合は FC ?
// 今回は VFC でも良い
export const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  // Taskの状態を切り替える
  const handleCheckBox = (
    // TODO: Event系の型はちゃんと調査する
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const newTasks = tasks.map(( task, _i ) => {
      return _i === i ? { ...task, isDone: e.target.checked } : task;
    });
    setTasks(newTasks);
  };

  const check = () => {
    console.log(tasks)
  }

  return (
    <ul>
      <button
        onClick={check}
      >
        check list
      </button>
      {tasks.map((task, index) => {
        // TODO: ここで todo-${index} で key を文字列にしているのは，再レンダリングされる時に被らないようにするため？
        <li key={`todo-${index}`}>
          {task.isDone ? <s>{ task.label }</s> : task.label}
          <input
            onChange={(e) => handleCheckBox(e, index)}
            type="checkbox"
            checked={task.isDone}
          />
        </li>
      })}
    </ul>
  );
};
