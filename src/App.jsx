import { lazy } from 'react'
import './App.css'
import './index.css'

const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const WorkExperince = lazy(() => import('./pages/WorkExperince'));
const TechnicalSkills = lazy(() => import('./pages/TechnicalSkills'));
const Services = lazy(() => import('./pages/Services'));
const MyProjects = lazy(() => import('./pages/MyProjects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {

  return (
    <div className=' relative   '> 
     <div className=' fixed w-full xl:w-[1235px] mx-auto top-2 left-0 right-0 z-50 '>
      <Navbar />
      </div> 
      <Home/>
      <AboutMe/>
      <WorkExperince/>
      <TechnicalSkills/>
      <Services/>
      <MyProjects/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
