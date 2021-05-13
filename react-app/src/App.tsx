import UseEffectComponent from "./UseEffectComponent";
import UseStateComponent from "./UseStateComponent";

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
    </div>
  );
}

export default App;
