import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { request } from "./server";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

export type Task = { label: string; isDone: boolean, atChanged: string };

const App: React.VFC = () => {
  // タスクリストを格納する
  const [tasks, setTasks] = useState<Task[]>([]);
  // 追加前のタスクを格納する
  const [newTaskLabel, setNewTaskLabel] = useState<string>("");

  // ページマウント時にモックAPIからデータを取得
  useEffect(() => {
    request.fetchTasks((payload: Task[]) => {setTasks(payload)})
  }, []);

  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      {/* ヘッダー */}
      <h1>Tutorial Works</h1>
      <h2>React Todo List</h2>

      {/* 一覧表示 */}
      {/* TODO: ここはFragmentを省略している */}
      <TaskList {...{ tasks, setTasks }} />

      {/* タスク追加、削除 */}
      <TaskForm {...{ tasks, setTasks, newTaskLabel, setNewTaskLabel }} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
