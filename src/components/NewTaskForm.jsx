import React from "react";
export default function NewTaskForm() {
  return (
    <form>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autofocus
      />
    </form>
  );
}
