import "./App.css";
import Header from "./components/header/Header";
import Note from "./components/note/Note";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="mx-5 my-5">
        <Note />
      </div>
    </div>
  );
}

export default App;
