import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./components/Table/Table";
import { useDispatch } from "react-redux";
import { listAction1 } from "./store/action";
import Navbar from "./components/Navbar/Navbar";

function App() {
const dispatch=  useDispatch()
dispatch(listAction1())
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/table/:id" element={<Table />} />
        </Routes>
        <Navbar/>
      </Router>
    </>
  );
}

export default App;
