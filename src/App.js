import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';

import './App.css';

function App() {
  return (
    // <div className='container' name='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route exact path='/home' element={<Home />} /> */}
          {/* <Route exact path='/about' element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;