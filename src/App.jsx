import './App.css';
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [done, setDone] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    const handleCheck = index => {
        setDone([...done, todos[index]]);
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-list">
            <h1> TODO LIST</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={event => setNewTodo(event.target.value)}
                />
            </form>
            <div className="todo-lists">
                <div className="todo-column">
                    <div className="title">
                        <h3>Todo</h3>
                    </div>
                    <ul className="liste">
                        {todos.map((todo, index) => (
                            <li key={index} >
                                <input type="checkbox" onClick={() => handleCheck(index)} />
                                {todo}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="done-column">
                    <div className="title">
                        <h3>Done</h3>
                    </div>
                    <ul className="liste">
                        {done.map((todo, index) => (
                            <li key={index}>{todo}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
