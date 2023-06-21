import { BrowserRouter, Route, Routes,Router } from 'react-router-dom';
import Login from './components/Router/login';
import Navbar from './components/Router/navbar';
import Education_Detail from './components/Router/education_detail';
import Personal_Detail from './components/Router/personal_detail';
import Table_Data from './components/Router/table';
import Work_Detail from './components/Router/work_detail';
import StepperBar from './components/Router/stepper';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
      {/* <StepperBar/> */}
      <Routes>
      <Route path='/' element={<StepperBar/>}/>
        <Route path='/table' element={<Table_Data/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

