import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
}from "react-router-dom"
import Login from "./Pages/Login"
import SingUp from "./Pages/SingUp"
import Home from "./Pages/Dashboard/Home"
import Income from "./Pages/Dashboard/Income"
import Expense from "./Pages/Dashboard/Expense"

const App = () => {
  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App;



const Root = () =>{
  // check if token exists in localStorage

  const iSAuthenticated = !!localStorage.getItem("token");

  //Redirect to dashboard if authenticaed , otherwise to login

  return iSAuthenticated ?(
    <Navigate to="/dashboard" />
  ):(
    <Navigate to="/login" />
  );
};