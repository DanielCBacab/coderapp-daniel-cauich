import "./App.css";
import GlobalProvider from "./context/GlobalStateContext";
import RutasComp from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <RutasComp />
      </GlobalProvider>
    </div>
  );
}

export default App;
