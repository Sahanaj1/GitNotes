import Reg from './Reg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home';
import HeaderComponent from './components/Headercomponents/HeaderComponent';
import Notes from './components/BodyComponents/Notes';
import AboutUs from './components/BodyComponents/AboutUs'
import ContactUs from './components/BodyComponents/ContactUs';
import Footer from './components/BodyComponents/Footer';
import NoteComp from "./components/NoteComp/NoteComp"

import Files from './components/NoteComp/Files';
import {posts} from './data'
function App() {
  const user=true;
  return (
    <div className="App">
    
     

   
      <Router>
        <Routes>
       
        <Route exact path="/" element={<><HeaderComponent/><Notes/><AboutUs/><ContactUs/><Footer/> </>}/>
        
        <Route exact path="/reg" element={<><HeaderComponent/><Notes/><AboutUs/><ContactUs/><Footer/> </>}/>
        <Route exact path="/cs" element={<><NoteComp props={"Computer Science"} currentBranch={"cs"}/><Footer/></>}/>
        <Route exact path="/is" element={<><NoteComp props={"Information Science"} currentBranch={"is"}/><Footer/></>}/>
        <Route exact path="/ec" element={<><NoteComp  props={"Electronics and Communication"} currentBranch={"ec"}/><Footer/></>}/>
        <Route exact path="/me" element={<><NoteComp  props={"Mechanical Engineering"} currentBranch={"me"}/> <Footer/></>}/>
        <Route exact path="/cv" element={<><NoteComp  props={"Civil Engineering"} currentBranch={"cv"}/><Footer/></>}/>
        <Route exact path="/first" element={<><NoteComp  props={"First Year"} currentBranch={"first"}/><Footer/></>}/>

        </Routes>
      </Router>
     
    
    
    </div>
  );
}

export default App;
