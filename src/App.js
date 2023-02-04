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
import HomePage from "./pages/HomePage";
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";
import ClassStart1 from "./pages/ClassStart1";
import ClassStart2 from "./pages/ClassStart2";
import ClassStart3 from "./pages/ClassStart3";
import Quiz from "./pages/Quiz";
import DemoPage from "./pages/DemoPage";
//import Common1 from "./components/Common1";

function App() {

  return (
    <div>
      
      <BrowserRouter>
      
        <Routes>
          {/* <Route path="/" element={<DemoPage/>}/> */}
                 <Route path="/" element={<HomePage/>}/>
          <Route path="/classstart2" element={<ClassStart2/>}/>
          <Route path="/classstart3" element={<ClassStart3/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/classstart1" element={<ClassStart1/>}/> 
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signupotp" element={<Signupotp/>}/>
        <Route path="/forgotcode" element={<Forgotcode/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/newpass" element={<Newpassword/>}/>
        <Route path="/loginsuccess" element={<Loginsuccess/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
