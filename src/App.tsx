import { appContainer } from "./App.css";
import Note from "./components/Note/Note";
import TopContainer from "./components/TopContainer/TopContainer";

function App() {
  return (
    <div className={appContainer}>
      <Note></Note>
    </div>
  );
}

export default App;
