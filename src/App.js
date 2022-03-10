import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import {HomePage} from "./components/homepage/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SignInPage} from "./components/sign-in/SignInPage";
import {SignUpPage} from "./components/sign-up/SignUpPage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
