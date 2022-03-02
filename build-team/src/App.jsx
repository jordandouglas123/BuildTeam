/*
Controlls all other components and pages.
Merges them into one. 
Also contains the router packages which controls the app's navigation. 
*/

// React Router
import {Route, BrowserRouter, Routes} from "react-router-dom"

// Components
import Header from "./components/Header"

// Pages
import Home from "./pages/Home"
import EmployeeDash from "./pages/EmployeeDashboard"
import EmployerDash from "./pages/EmployerDashboard"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import About from "./pages/About"


function App() {
  return (
    //Browser Router Controlls the entire routing for the site.
    //Route controls the path to each page. 
    //Element is the different components and pages that the routes link to. 
      <BrowserRouter>
          <div className="App">
              <Header />
          </div>
          <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="/employee" element = { <EmployeeDash /> } />
            <Route path="/employer" element = { <EmployerDash /> } />
            <Route path="/login" element = { <Login /> } />
            <Route path="/signup" element = { <SignUp /> } />
            <Route path="/about" element = { <About /> } />
          </Routes>
      </BrowserRouter>
  );
}

export default App;