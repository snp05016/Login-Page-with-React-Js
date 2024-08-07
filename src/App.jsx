import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormContainer from './Component/FormContainer';
import TemplateContainer from './Component/TemplateContainer';
import CreateAccountPage from './Component/CreateAccountPage';
import ForgotPassword from './Component/ForgotPassword';
import Forgot from './Component/Forgot';
const App = () => {
    return (
        <div className="container-x">
            <Router>
                <Routes>
                    <Route exact path="/" element={<FormContainer />} />
                    <Route path="/Create-account" element={<CreateAccountPage />} />
                    <Route path= "/forgot-email -password" element={<ForgotPassword />} />
                    <Route path= "/forgot-password" element={<Forgot />} />
                </Routes>
                <TemplateContainer/>
                
            </Router>
         </div>
    );
};
export default App;