import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cards from './components/Cards'
import Details from "./components/Detail";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/starwa" element={<Cards />} />
        <Route path="movie/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
