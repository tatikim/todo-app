import React from "react";

import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import TasksFilter from "./components/TasksFilter";

function App() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>

      <section className="main">
        <TaskList />

        <Footer>
          <TasksFilter>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Active</button>
            </li>
            <li>
              <button>Completed</button>
            </li>
          </TasksFilter>
        </Footer>
      </section>
    </section>
  );
}

export default App;
