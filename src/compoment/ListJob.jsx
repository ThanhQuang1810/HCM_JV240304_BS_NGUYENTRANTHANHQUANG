import React from "react";
import "./App1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

export default function ListJob({
  listJob,
  handleDelete,
  handleCheck,
  count,
  handleEdit,
}) {
  return (
    <div>
      <div className="list-job">
        {listJob.length > 0 ? (
          listJob?.map((job) => (
            <div key={job.id} className="job">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  onClick={() => handleCheck(job.id)}
                  checked={job.isChecked}
                />
              </label>
              <span className={`job-title ${job.isChecked ? "completed" : ""}`}>
                {job.title}
              </span>
              <div className="job-actions">
                <FontAwesomeIcon
                  icon={faPen}
                  onClick={() => handleEdit(job.id)}
                  className="icon"
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(job.id)}
                  className="icon"
                />
              </div>
            </div>
          ))
        ) : (
          <img
            src="https://t4.ftcdn.net/jpg/05/86/21/03/360_F_586210337_WOGOw0l7raEB8F61Muc4hWbvVcyQdk9Z.jpg"
            style={{ width: "250px" }}
          ></img>
        )}
      </div>
      <p className="job-count">
        Công việc đã hoàn thành: {count}/{listJob.length}
      </p>
    </div>
  );
}
