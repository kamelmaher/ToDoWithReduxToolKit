import ToDoForm from "./components/ToDoForm"
import ToDoList from "./components/ToDoList"
function App() {
  return (
    <div className="w-50 m-auto mt-5">
      <h1 className="mb-3">To Do List</h1>
      <ToDoForm />
      <ToDoList />
    </div>
  )
}
export default App
