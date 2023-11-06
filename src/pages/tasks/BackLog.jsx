import React, { useEffect, useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";

const BackLog = () => {
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("StorageTask")) {
      setTasks(JSON.parse(localStorage.getItem("StorageTask")));
    }
  }, []);

  const onChange = (e) => {
    setDescription(e.target.value);
  };
  const saveTesk = (e) => {
    e.preventDefault();
    if (description) {
      if (!tasks.length) {
        const StorageTask = [];
        StorageTask.push({ description, status: "created" });
        localStorage.setItem("StorageTask", JSON.stringify(StorageTask));
        setTasks(StorageTask);
      } else {
        const newTesks = JSON.parse(localStorage.getItem("StorageTask"));
        newTesks.push({ description, status: "created" });
        localStorage.setItem("StorageTask", JSON.stringify(newTesks));
        setTasks(newTesks);
      }
    }
    setDescription("");
  };
  const updated = (desc) => {
    const newTasks = [...tasks];
    newTasks.map((p) => {
      desc === p.description && (p.status = "inProgress");
    });
    setTasks(newTasks);
    localStorage.setItem("StorageTask", JSON.stringify(newTasks));
  };
  return (
    <>
      <form onSubmit={saveTesk}>
        <Input value={description} name="description" onChange={onChange} />
        <Button
          value="ADD TASKE"
          className="btn btn-success mt-2"
          type="submit"
        />
      </form>
      {tasks.length ? (
        <>
          {tasks
            .filter((p) => p.status == "created")
            .map((task, index) => {
              return (
                <div
                  key={index}
                  className="mt-3 d-flex justify-content-between  alert alert-primary"
                >
                  <div className="">
                     {task.description}
                  </div>
                  <div className="">{task.status}</div>
                  <Button
                    className="btn btn-info"
                    value="added to progress list"
                    action={() => updated(task.description)}
                  />
                </div>
              );
            })}
        </>
      ) : (
        <div className="mt-3 d-flex justify-content-between  alert alert-danger">
          <span> backlog is empty!!!</span>
        </div>
      )}
    </>
  );
};

export default BackLog;
