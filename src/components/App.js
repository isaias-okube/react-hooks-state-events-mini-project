// import React,{useState} from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [tasks, setTasks] = useState(TASKS);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleTaskFormSubmit = (newTask) => {
//     setTasks([...tasks, newTask]);
//   };

//   const filteredTasks =
//     selectedCategory === "All"
//       ? tasks
//       : tasks.filter((task) => task.category === selectedCategory);

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter
//         categories={CATEGORIES}
//         selectedCategory={selectedCategory}
//         onSelectCategory={handleCategoryChange}
//       />
//       <NewTaskForm
//         categories={CATEGORIES}
//         onTaskFormSubmit={handleTaskFormSubmit}
//       />
//       <TaskList tasks={filteredTasks}
//       onDeleteClick={(text) => {
//         const updatedTasks = tasks.filter((task) => task.text !== text);
//         setTasks(updatedTasks);
//       }
//       } />
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (text) => {
    const updatedTasks = tasks.filter((task) => task.text !== text);
    setTasks(updatedTasks);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDeleteClick={handleDeleteTask} />
    </div>
  );
}

export default App;
