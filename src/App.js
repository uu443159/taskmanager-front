import './App.css';
import {Route, Routes} from 'react-router-dom';
import {StartPage} from "./components/startpage/StartPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SignInPage} from "./components/sign-in/SignInPage";
import {SignUpPage} from "./components/sign-up/SignUpPage";
import {HomePage} from "./components/homepage/HomePage";

function App() {
  return (
    <div className='App'>
        {/*<Header />*/}
        {/*<AddTaskModal />*/}
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/home-page' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
