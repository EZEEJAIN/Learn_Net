import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgot from "./pages/Forgot";
import Forgotcode from "./pages/Forgotcode";
import Newpassword from "./pages/Newpassword";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Signupotp from "./pages/Signupotp";
import Loginsuccess from "./pages/Loginsuccess";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Coursedesabout from "./components/Coursedesabout";
//import Common1 from "./components/Common1";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signupotp" element={<Signupotp/>}/>
        <Route path="/forgotcode" element={<Forgotcode/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/newpass" element={<Newpassword/>}/>
        <Route path="/loginsuccess" element={<Loginsuccess/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
