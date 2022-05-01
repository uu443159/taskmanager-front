import './App.css';
import {Route, Routes} from 'react-router-dom';
import {StartPage} from "./pages/startpage/StartPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SignInPage} from "./pages/sign-in/SignInPage";
import {SignUpPage} from "./pages/sign-up/SignUpPage";
import {HomePage} from "./pages/homepage/HomePage";
import {SettingsPage} from "./pages/settings/SettingsPage";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<StartPage/>}/>
                <Route path='/sign-in' element={<SignInPage/>}/>
                <Route path='/sign-up' element={<SignUpPage/>}/>
                <Route path='/home-page' element={<HomePage/>}/>
                <Route path='/settings' element={<SettingsPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
