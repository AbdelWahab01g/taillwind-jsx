import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Login from './pages/Login_page';
import UserTable from './pages/Admin_page';
import Signup from './pages/Signup_page';
import PrivateRoute from './components/Priveteroute';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/admin" element={<UserTable />} /> */}
          <Route path="/admin"element={<PrivateRoute><UserTable /></PrivateRoute>}/>
          <Route path="*" element={<h1>ERORR 404 / page d`ont existe</h1>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
