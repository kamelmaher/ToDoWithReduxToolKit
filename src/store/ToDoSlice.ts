import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type ToDo = {
    title: string,
    id:number,
    isCompleted: boolean
} 
type ToDoState = {
    ToDo: ToDo[]
}
const initialState: ToDoState = {
    ToDo:[]
}
export const ToDoslice = createSlice({
    name: "ToDo", 
    initialState,
    reducers: {
        setToDos: (state, action: PayloadAction<ToDo[]>) => {
            state.ToDo = action.payload;
        },
        addToDo:(state , action:PayloadAction<ToDo>) => {
            state.ToDo.push(action.payload)
            localStorage.setItem("ToDos" , JSON.stringify(state.ToDo))
        },
        removeToDo: (state , action: PayloadAction<number>) => {
            state.ToDo = state.ToDo.filter(e => e.id != action.payload) 
            localStorage.setItem("ToDos" , JSON.stringify(state.ToDo))
        },
        completeTodo:(state , action:PayloadAction<number>) => {
            state.ToDo.map(e => {
                if (e.id == action.payload) {
                    e.isCompleted = !e.isCompleted
                    localStorage.setItem("ToDos" , JSON.stringify(state.ToDo))
                }
            })
        }
    }
})


export default ToDoslice.reducer;
export const {addToDo , removeToDo , setToDos , completeTodo} = ToDoslice.actions