import { Route, Routes } from 'react-router-dom';
import PageDesign from './Screens/GlobalComponents/Navbar/Components/PageDesign/PageDesign';
import Navbar from './Screens/GlobalComponents/Navbar/Navbar';
import Board from './Screens/Board/Board';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<PageDesign />} />
        <Route path='board/:idProject' element={<Board />} />
      </Routes>
    </div>
  );
}
export default App;
