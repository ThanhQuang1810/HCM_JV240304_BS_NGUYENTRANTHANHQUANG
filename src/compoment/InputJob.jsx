import React from "react";
import "./App1.css";

export default function InputJob({ addNewJob }) {
  return (
    <div>
      <form className="input-submit" onSubmit={addNewJob}>
        <input
          className="input"
          type="text"
          placeholder="Type Job "
          autoFocus
        />
        <button className="button" type="submit">
          Add new job
        </button>
      </form>
    </div>
  );
}
