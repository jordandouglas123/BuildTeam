/*
Controlls all other components and pages.
Merges them into one. 
Also contains the router packages which controls the app's navigation. 
*/

// React Router
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Components
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import EmployeeForm from "./components/EmployeeForm";
import EmployerForm from "./components/EmployerForm";
import LoginForm from "./components/LoginForm";

// Pages
import Home from "./pages/Home";
import EmployeeDash from "./pages/EmployeeDashboard";
import EmployerDash from "./pages/EmployerDashboard";
import Contact from "./pages/ContactForm";
import Form from "./pages/Form";

// style
import "./css/app.css"

function App() {
    return (
        //Browser Router Controlls the entire routing for the site.
        //Route controls the path to each page.
        //Element is the different components and pages that the routes link to.
        <AuthProvider>
            <BrowserRouter>
                <div className="App" id="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contactus" element={<Contact />} />
                        <Route path="/employee" element={<EmployeeDash />} />
                        <Route path="/employer" element={<EmployerDash />} />
                        <Route path="/signup" element={<SignUpForm />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/employeeform" element={<EmployeeForm />} />
                        <Route path="/employerform" element={<EmployerForm />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
