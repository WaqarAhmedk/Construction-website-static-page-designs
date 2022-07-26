import './App.css';
import Homepage from './homepage';
import Projects from './projects';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Wahtwedo from './whatwedo';
import Aboutus from './abouus';
import Blog from './blog';
import Contactus from './contact';


function App() {
  return (


    <>
   

    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route exact path="/projects" element={<Projects />}></Route>
    <Route exact path="/whatwedo" element={  <Wahtwedo />}></Route>
    <Route exact path="/aboutus" element={ <Aboutus />}></Route>
    <Route exact path="/blog" element={<Blog />}></Route>
    <Route exact path="/contactus" element={<Contactus />}></Route>



  

    </Routes> 
  </BrowserRouter>

    
   
    
    </>
  );
}

export default App;
