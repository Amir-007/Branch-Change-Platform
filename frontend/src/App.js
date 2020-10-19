import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import AdminHome from './core/AdminHome'
import Login from './Components/Login'
import LoginPage from './core/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentHome from './core/StudentHome'
import ChangeRequestForm from './Components/ChangeRequestForm'

function App() {
  return (
    <div>
      <Header />
      <br/>
      <StudentHome />
      <br/>
      <Footer />
    </div>
  );
}

export default App;
