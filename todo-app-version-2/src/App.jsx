import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buymilk",
      date: "4/10/2023",
    },
    {
      name: "College jao",
      date: "4/10/2023",
    },
    {
      name: "REACT STUDY",
      date: "4/10/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
