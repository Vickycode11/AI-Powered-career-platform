import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Signup from './pages/signup';
import Chatbot from './pages/chatbot';
import LandingPage from './pages/landingpage';
import './styles/App.css';
import TestPage from './pages/TestPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import ProfilePage from './pages/ProfilePage';
import LearningResources from './pages/LearningResources';
import Counselors from './pages/Counselors';  // Importing the Counselors component

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/terms" element={<TermsAndConditionsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/learningResources" element={<LearningResources />} />
            <Route path="/counselors" element={<Counselors />} />  {/* Updated route path */}
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/testPage" element={<TestPage />} />
            <Route path="/termsAndConditions" element={<TermsAndConditionsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
