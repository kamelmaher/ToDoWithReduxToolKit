import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store"
import ToDoItem from "./ToDoItem"
import { ToDo, setToDos } from "../store/ToDoSlice";

export default function ToDoList() {
    const {ToDo} = useAppSelector(state => state.ToDo)
    const dispatch = useAppDispatch();
    useEffect(()=>{
        const data = localStorage.getItem("ToDos");
        if(data){
            const newData:ToDo[] = JSON.parse(data);
            dispatch(setToDos(newData))
        }
    } , [dispatch])
    return <>
        <ul className="list-group">
            {ToDo.map((e , index) => {
                return <ToDoItem key={index} ToDo={e}/>
            })}
        </ul>
    </>
}