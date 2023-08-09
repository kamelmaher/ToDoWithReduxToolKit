import { ToDo , completeTodo, removeToDo } from "../store/ToDoSlice"
import { useAppDispatch } from "../store/store"

type ToDoItemProps = {
    ToDo: ToDo
}
export default function ToDoItem ({ToDo}:ToDoItemProps) {
    const dispatch = useAppDispatch()
    return <>
        <li className={ToDo.isCompleted ? "bg-success text-white d-flex list-group-item justify-content-between align-items-center p-2" : "d-flex list-group-item justify-content-between align-items-center p-2"}>
            <p>{ToDo.title}</p>
            <div className="d-flex gap-4">
                <button 
                className="btn btn-primary" 
                onClick={()=> {
                    dispatch(removeToDo(ToDo.id))
                }}>Remove</button>
                <button 
                onClick={()=> {
                    dispatch(completeTodo(ToDo.id))
                }}
                className="btn btn-primary"
                style={{width: "120px"}}>
                {ToDo.isCompleted ? "UnComplete" : "Complete"}
                </button>
            </div>
        </li>
    </>
}