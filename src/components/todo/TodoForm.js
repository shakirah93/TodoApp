import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoAction";

export default function TodoForm() {
    const [task, setTask] = useState("");

    // this allows me to call my action
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim() !== "") {
            dispatch(addTodo(task))
        }
        setTask("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <button>Add Todo</button>
        </form>
    )
}