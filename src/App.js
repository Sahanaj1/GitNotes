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
import Navbar from './components/Headercomponents/Navbar';
import NewNav from './components/NoteComp/NewNav';
import CsNotes from './components/NoteComp/CsNotes';
import EcNotes from './components/NoteComp/EcNotes';
import MeNotes from './components/NoteComp/MeNotes';
import CvNotes from './components/NoteComp/CvNotes';
import CommonNotes from './components/NoteComp/CommonNotes';
import Files from './components/NoteComp/Files';
import {posts} from './data'
function App() {
  const user=true;
  return (
    <div className="App">
    
     

   
      <Router>
        <Routes>
        {/* <Route exact path="/" element={<Home/>}/> */}
        <Route exact path="/" element={<><HeaderComponent/><Notes/><AboutUs/><ContactUs/><Footer/> </>}/>
        {/* <Route exact path="/" element={}/>
        <Route exact path="/" element={}/>
        <Route exact path="/" element={<Footer/>}/> */}
        <Route exact path="/reg" element={<Reg/>}/>
        <Route exact path="/cs" element={<><CsNotes props={"Computer Science"} posts={posts}/><Footer/></>}/>
        <Route exact path="/ec" element={<><EcNotes  props={"Electronics and Communication"}/><Footer/></>}/>
        <Route exact path="/me" element={<><MeNotes  props={"Mechanical Engineering"}/><Footer/></>}/>
        <Route exact path="/cv" element={<><CvNotes  props={"Civil Engineering"}/><Footer/></>}/>
        <Route exact path="/first" element={<><CommonNotes  props={"First Year"}/><Footer/></>}/>

        <Route exact path="/cs/cs1" element={<><CsNotes  props={"First Sem Cse"}  num={'1'}/> <Footer/></>}/>
        <Route exact path="/cs/cs2" element={<><CsNotes  props={"Second Sem Cse"} num={'2'}/><Footer/></>}/>
        <Route exact path="/cs/cs3" element={<><CsNotes  props={"Third Sem Cse"} num={'3'}/><Footer/></>}/>
        <Route exact path="/cs/cs4" element={<><CsNotes  props={"Fourth Sem Cse"} num={'4'}/><Footer/></>}/>
        <Route exact path="/cs/cs5" element={<><CsNotes  props={"Fifth Sem Cse"} num={'5'}/><Footer/></>}/>
        <Route exact path="/cs/cs6" element={<><CsNotes  props={"Sixth Sem Cse"} num={'6'}/><Footer/></>}/>
       {/* ec */}
        <Route exact path="/ec/ec1" element={<><EcNotes  props={"First Sem ECE"} /><Footer/></>}/>
        <Route exact path="/ec/ec2" element={<><EcNotes  props={"Second Sem ECE"}/><Footer/></>}/>
        <Route exact path="/ec/ec3" element={<><EcNotes  props={"Third Sem ECE"}/><Footer/></>}/>
        <Route exact path="/ec/ec4" element={<><EcNotes  props={"Fourth Sem ECE"}/><Footer/></>}/>
        <Route exact path="/ec/ec5" element={<><EcNotes  props={"Fifth Sem ECE "}/><Footer/></>}/>
        <Route exact path="/ec/ec6" element={<><EcNotes  props={"Sixth Sem ECE"}/><Footer/></>}/>
{/* me */}
        <Route exact path="/me/me1" element={<><MeNotes  props={"First Sem ME"}  posts={posts}/><Footer/></>}/>
        <Route exact path="/me/me2" element={<><MeNotes  props={"Second Sem ME"}/><Footer/></>}/>
        <Route exact path="/me/me3" element={<><MeNotes  props={"Third Sem ME"}/><Footer/></>}/>
        <Route exact path="/me/me4" element={<><MeNotes  props={"Fourth Sem ME"}/><Footer/></>}/>
        <Route exact path="/me/me5" element={<><MeNotes  props={"Fifth Sem ME "}/><Footer/></>}/>
        <Route exact path="/me/me6" element={<><MeNotes  props={"Sixth Sem ME"}/><Footer/></>}/>
        {/* cv */}
        <Route exact path="/cv/cv1" element={<><CvNotes  props={"First Sem CV"} /><Footer/></>}/>
        <Route exact path="/cv/cv2" element={<><CvNotes  props={"Second Sem CV"}/><Footer/></>}/>
        <Route exact path="/cv/cv3" element={<><CvNotes  props={"Third Sem CV"}/><Footer/></>}/>
        <Route exact path="/cv/cv4" element={<><CvNotes  props={"Fourth Sem CV"}/><Footer/></>}/>
        <Route exact path="/cv/cv5" element={<><CvNotes  props={"Fifth Sem CV "}/><Footer/></>}/>
        <Route exact path="/cv/cv6" element={<><CvNotes  props={"Sixth Sem CV"}/><Footer/></>}/>
        {/* first */}
        <Route exact path="/first/p" element={<><CommonNotes  props={"First Year"} name={"Physics Cycle"}/><Footer/></>}/>
        <Route exact path="/first/c" element={<><CommonNotes  props={"First Year"}  name={"Chemistry Cycle"}/><Footer/></>}/>
        </Routes>
      </Router>
     
    
    
    </div>
  );
}

export default App;
