import Task from "./Task";

export default function TaskList() {
  return (
    <ul className="todo-list">
      <Task 
      status="completed"
      description="Completed task" 
      created={new Date()}
     
      />

      <Task    
      status="editing"
      description="Editing task" 
     created={new Date()}
       />
      <Task    
      status="active"
      description="Active task" 
   created={new Date()}
      />
    </ul>
  );
}
