import { useState } from "react";
import { useAppDispatch } from "../store/store"
import { ToDo, addToDo } from "../store/ToDoSlice";

export default function ToDoForm() {
    const [title , setTitle] = useState("")
    const dispatch = useAppDispatch();
    return <>
        <div className="input-group mb-4">
            <input type="text" value={title} className="form-control" onChange={e => setTitle(e.target.value)}/>
            <button className="input-group-text btn btn-primary" onClick={()=> {
                if(title.trim() != "") {
                    const newToDo:ToDo = {
                        title: title,
                        id: Math.floor(Math.random() * 1000),
                        isCompleted: false
                    }
                    dispatch(addToDo(newToDo));
                    setTitle("")
                }
                }}>Add</button>
        </div>
    </>
}