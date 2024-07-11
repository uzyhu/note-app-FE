import { appContainer } from "./App.css";
import CreateModal from "./components/CreateModal/CreateModal";
import Note from "./components/Note/Note";
import TopContainer from "./components/TopContainer/TopContainer";
import { useTypedSelector } from "./hooks/redux";

function App() {
  const modalActive = useTypedSelector(state => state.note.modalActive);
  return (
    <div className={appContainer}>
      {modalActive ? <CreateModal/> : null}
      <Note></Note>
    </div>
  );
}

export default App;
