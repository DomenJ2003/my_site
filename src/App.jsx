import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css'
import ContactMePage from './pages/contact_me'
import HomePage from './pages/home-page';
import MyProjects from './pages/my_projects';
import AboutMe from './pages/about_me';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/contact-me' element={<ContactMePage/>}></Route>
        <Route path='/about-me' element={<AboutMe/>}></Route>
        <Route path='/my-projects' element={<MyProjects/>}></Route> 
      </Routes>
    </Router>
  )
}

export default App
