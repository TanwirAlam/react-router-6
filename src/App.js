
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import User from './components/User';
import Filter from './components/Filter';
import Course from './components/Course';

import Math from './components/Math';
import Science from './components/Science';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/user/:name' element={<User/>}/>
           <Route path='/filter/' element={<Filter/>}/>
           <Route path='/course' element={<Course/>}>
                <Route path="math" element={<Math />} />
                <Route path="science" element={<Science/>}/>
           </Route>
           <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
