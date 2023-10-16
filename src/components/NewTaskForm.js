import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [taskText, setTaskText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Code")

  function handleFormSubmit(e){
    e.preventDefault()
    if (taskText && selectedCategory) {
      const formData = {
        text: taskText,
        category: selectedCategory,
      };
      onTaskFormSubmit(formData);
      setTaskText("")
      setSelectedCategory("Code")
    }
  }



  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          placeholder="New task details"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}


export default NewTaskForm;
 