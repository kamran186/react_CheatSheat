import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import MainPage from './WrapperComponent/MainPage';
import HODComponent from './HODComponent';
import ClassComponentLifeCycle from './ClassComponentLifeCycle/ClassComponentLifeCycle';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/class' element={<ClassComponent />} />
        <Route path='/class/classcl' element={<ClassComponentLifeCycle />} />
        <Route path='/functional/:name' element={<FunctionalComponent />} />
        <Route path='/hod' element={<HODComponent />} />
      </Routes>
    </>
  );
}

export default App;
