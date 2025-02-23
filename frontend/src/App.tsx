import './App.css'
import MainPage from "./MainPage.tsx";
import PszPage from "./psz/PszMain.tsx"
import MoshPage from "./mosh/MoshMain.tsx"
import FuzisPage from "./fuzis/FuzisMain.tsx"
import VaneshikPage from "./vaneshik/VaneshikMain.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/psz" element={<PszPage />} />
              <Route path="/mosh" element={<MoshPage />} />
              <Route path="/fuzis" element={<FuzisPage />} />
              <Route path="/vaneshik" element={<VaneshikPage />} />
          </Routes>
      </Router>
  )
}

export default App
