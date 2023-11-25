import { useSelector } from "react-redux"


export default function TodoList() {
    const { todos } = useSelector(state => state.todos);

    let taskLength = todos.length === 0;

    console.log(todos);

    return(
        <div>
            {
                taskLength
                ? <h3>No Tasks Added Yet</h3>
                :   <ul>
                        {todos.map(t => (
                            <li key={t}>{t}</li>
                        ))}
                    </ul>
            }
        </div>
    )
}
