import "./App.css";
import DisplayWeather from "./components/DisplayWeather/DisplayWeather";
import Form from "./Form/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <DisplayWeather />
    </div>
  );
}

export default App;
