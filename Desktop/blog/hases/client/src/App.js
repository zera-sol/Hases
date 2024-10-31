import {Routes, Route} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <Routes>
       <Route path='/' element={<LandingPage />}></Route>
       <Route path='/login' element={<LoginPage />}></Route>
       <Route path='/register' element={<RegisterPage />}></Route>
    </Routes>
    
  );
}

export default App;
