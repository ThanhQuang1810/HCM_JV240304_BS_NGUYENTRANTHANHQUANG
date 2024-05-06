import { useState } from "react";
import React from "react";
import InputJob from "./InputJob";
import ListJob from "./ListJob";
import "./App1.css";

export default function App() {
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );
  const addNewJob = (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    if (title === "") {
      alert("VUi lòng nhập tên công việc");
    } else {
      const newJob = {
        id: Math.floor(Math.random() * 1000),
        title: title,
        isChecked: false,
      };
      setJobs([...jobs, newJob]);
      alert("Thêm công việc thành công");
      localStorage.setItem("jobs", JSON.stringify([...jobs, newJob]));
      event.target.reset();
    }
  };
  const handleDelete = (id) => {
    const job = jobs.find((job) => job.id == id);
    if (window.confirm(`Bạn có muốn xóa công việc ${job.title} này không?`)) {
      setJobs(jobs.filter((ele) => ele.id != id));
      localStorage.setItem(
        "jobs",
        JSON.stringify(jobs.filter((job) => job.id != id))
      );
    }
  };

  const handleCheck = (id) => {
    const index = jobs.findIndex((job) => job.id == id);
    console.log(jobs);
    jobs[index].isChecked = !jobs[index].isChecked;
    setJobs([...jobs]);
    localStorage.setItem("jobs", JSON.stringify(jobs));
  };

  let count = 0;
  for (let i in jobs) {
    if (jobs[i].isChecked === true) count++;
  }

  const handleEdit = (id) => {
    const index = jobs.findIndex((job) => job.id == id);

    const editJobName = prompt(
      "Nhập vào thông tin công việc cần chỉnh sửa",
      jobs[index].title
    );
    if (editJobName !== null) {
      if (editJobName !== "") {
        jobs[index].title = editJobName;
        console.log(editJobName);
        setJobs([...jobs]);
        localStorage.setItem("jobs", JSON.stringify(jobs));
      } else {
        alert("Không được để trống!");
      }
    }
  };
  return (
    <>
      <div className="form">
        <h1>Danh sách công việc</h1>
        <InputJob addNewJob={addNewJob} />
        <ListJob
          listJob={jobs}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          count={count}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}
