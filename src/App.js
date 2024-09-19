import { Route, Routes } from 'react-router-dom';
import './App.css';
 import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import ShowEnquiry from './Components/ShowEnquiry';
 import StudentFullDetails from './Components/StudentFullDetails';

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/enquiry' element={<Registration/>}/>
      <Route path='/showEnquiry' element={<ShowEnquiry/>}/>
      <Route path='/fullDtails/:id' element={<StudentFullDetails/>}/> 
    </Routes>
    
    </div>
  );
}

export default App;