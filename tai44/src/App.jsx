import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  LoginForm from './pages/Login'
import SignUpPage from './pages/signup'
import Homepageadmin from './pages/Homepageadmin';
import InsertRolePage from './pages/role_page';
import InscriptionPage from './pages/Inscription_page'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/homeadmin" element={<Homepageadmin />} />
          <Route path="/insertrole" element={<InsertRolePage/>} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="*" element={<h1>ERORR 404 / page d`ont existe</h1>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
