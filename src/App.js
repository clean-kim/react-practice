import './App.css';
import TodosContainer from "./containers/TodosContainer";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <div className="App">
        <CounterContainer />
        <hr/>
        <TodosContainer />
    </div>
  );
}

export default App;
