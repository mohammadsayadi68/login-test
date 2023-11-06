import { useEffect, useState } from "react";
import Button from "../../components/button";
const Done = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("StorageTask")) {
      setTasks(
        JSON.parse(localStorage.getItem("StorageTask"))
      );
    }
  }, []);
  const remove = (desc) => {
    const newTaskss=tasks.filter((p)=>p.description!=desc)
    setTasks(newTaskss);
    localStorage.setItem("StorageTask", JSON.stringify(newTaskss));

  };
  return tasks.length ? (
    <>
      {tasks.map((task, index) => {
        return (
          task.status=='done'&&
          <div className="mt-3 d-flex justify-content-between alert alert-success" key={index}>
            <div className="">
              {task.description}
            </div>
            <div className="">{task.status}</div>
            <Button
              className="btn btn-danger"
              value="delete"
              action={() => remove(task.description)}
            />
          </div>
        );
      })}
    </>
  ) : (
    <>
      <div className="mt-3 d-flex justify-content-between  alert alert-danger">
        <span> task not found in the done list</span>
      </div>
    </>
  );
};

export default Done;
