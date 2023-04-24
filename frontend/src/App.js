import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <><Router><Routes>

    <Route exact path="/" element={<Dashboard  />}/>
    </Routes>

    </Router>
    </>
  );
}

export default App;
