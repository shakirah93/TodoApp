import logo from './logo.svg';
import './App.css';
import TodoList from './components/todo/TodoList';
import TodoForm from './components/todo/TodoForm';

function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
