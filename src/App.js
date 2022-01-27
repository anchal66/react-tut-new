import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todo</h1>
      <Todo title="Learn React"/>
      <Todo title="Master React"/>
      <Backdrop />
      <Modal />
    </div>
  );
}

export default App;
