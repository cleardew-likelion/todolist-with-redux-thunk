import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Spinner from "./components/common/Spinner";
import Password from "./components/common/Password";
import TodoContainer from "./components/todo/TodoContainer";
import { loadLock } from "./utils/LockService";

function App() {
  //@TODO login
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const _todos = localStorage.getItem("todos");
    const _lock = loadLock();
    if (_todos === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    if (_lock) {
      setIsLocked(_lock.isLock);
    }
  }, []);

  const RenderLayout = (
    <div>
      <TodoContainer setIsLocked={setIsLocked} />
    </div>
  );

  const LoadingLayout = (
    <div>
      <Spinner mask />
      <Password setIsLocked={setIsLocked} />
    </div>
  );

  return isLocked ? LoadingLayout : RenderLayout;
}

export default App;
