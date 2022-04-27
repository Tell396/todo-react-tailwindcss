export default function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className="grid m-1">
            <div className="flex bg-red-300 p-1 rounded-md">
                <div className="" onClick={() => toggleTask(todo.id)}>{todo.task}</div>
                <div className="ml-auto bg-red-500 pt-1 pr-3 pb-1 pl-3 rounded-md select-none" onClick={() => removeTask(todo.id)}>×</div>
            </div>
        </div>
    );
}
