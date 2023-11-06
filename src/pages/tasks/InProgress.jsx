import { useEffect, useState } from "react";
import Button from "../../components/button";
const InProgress = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("StorageTask")) {
      setTasks(JSON.parse(localStorage.getItem("StorageTask")));
    }
  }, []);
  const updated = (desc) => {
    const newTasks = [...tasks];
    newTasks.map((p) => {
      desc === p.description && (p.status = "done");
    });
    setTasks(newTasks);
    localStorage.setItem("StorageTask", JSON.stringify(newTasks));
  };
  return tasks.length ? (
    <>
      {tasks.map((task, index) => {
        return (
          task.status == "inProgress" && (
            <div
              className="mt-3 d-flex justify-content-between alert alert-info"
              key={index}
            >
              <div className="">
                {task.description}
              </div>
              <div className="">{task.status}</div>
              <Button
                className="btn btn-info"
                value="this job is done"
                action={() => updated(task.description)}
              />
            </div>
          )
        );
      })}
    </>
  ) : (
    <>
      <div className="mt-3 d-flex justify-content-between  alert alert-danger">
        <span> task not found in the inprogress list</span>
      </div>
    </>
  );
};

export default InProgress;
