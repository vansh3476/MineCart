import SignIn from './SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RegistrationForm } from './RegistrationForm';
import AppHome from './AppHome';
import './styles.scss'
import LandingPage from './landingPage';
import ProductPage from './ProductPage';

function App() {
  return (
    <div className={'appWrapper'}>
    {/*  */}
      <Router>
        <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<AppHome/>} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/products" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
