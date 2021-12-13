import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { request } from "./server";
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';

// TODOタスクの型
export type Task = {
  label: string;
  isDone: boolean
}

const App: React.VFC = () => {
  // タスクリストを格納する
  const [tasks, setTasks] = useState<Task[]>([]);
  // 追加前のタスクを格納する
  const [newTaskLabel, setNewTaskLabel] = useState<string>('');
  // ページマウント時にモックAPIからデータを取得
  useEffect(() => {
    request.fetchTasks((payload: Task[]) => {
      setTasks(payload);
    });
  }, []);

  const check = () => {
    console.log(tasks)
  }
  
  return (
    <div>
      {/* ヘッダー */}
      <h1 style={{ color: 'red' }}>Tutorial Works</h1>
      <p>This is Cyber Agent Handson!!</p>

      {/* 一覧表示 */}
      {/* TODO: ここはFragmentを省略している */}
      <TaskList {...{ tasks, setTasks}} />

      {/* タスク追加、削除 */}
      <TaskForm {...{ tasks, setTasks, newTaskLabel, setNewTaskLabel }} />
      <button 
        onClick={check}
      >
        check
        </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
