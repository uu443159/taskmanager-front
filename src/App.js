import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import {HomePage} from "./components/homepage/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SignInPage} from "./components/sign-in/SignInPage";
import {SignUpPage} from "./components/sign-up/SignUpPage";
import { Header} from "./components/header/Header";
import { AddTaskModal} from "./components/modal/AddTaskModal";

function App() {
  return (
    <div className='App'>
        <Header />
      <Routes>
          <Route path='/add-task' element={<AddTaskModal />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
