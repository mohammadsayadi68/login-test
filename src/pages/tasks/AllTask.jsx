import { useEffect, useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("StorageTask")) {
      setTasks(JSON.parse(localStorage.getItem("StorageTask")));
    }
  }, []);
  return tasks.length ? (
    <>
      {tasks.map((task, index) => {
        return (
          <div key={index} className=" alert alert-dark d-flex justify-content-between">
            <div className="">{task.description}</div>
            <div className="">{task.status}</div>
          </div>
        );
      })}
    </>
  ) : (
    <>
    <div className="alert alert-warning"> you have not any job!!!!!</div>
    </>
  );
};

export default Task;
