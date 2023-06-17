import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import DashboardPage from "./pages/DashboardPage"
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage/> } ></Route>
        <Route path='/login' element={ <LoginPage/> } ></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        auth ?
        <Route path='/dashboard' element={ <DashboardPage/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
