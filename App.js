import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import { Home } from './components/home page/home';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Employee } from './components/employee_details/employee';
import { EmployeeList } from './components/list/list';
import { Edit } from './components/list/edit';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/employee' element={<Employee/>}/>
    <Route path='/employeelist' element={<EmployeeList/>}/>
    <Route path='/edit' element={<Edit/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
