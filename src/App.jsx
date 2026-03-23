import { lazy, Suspense } from 'react';
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
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-[#101722] text-white">
          <p className="text-lg animate-pulse tracking-wide">Loading Portfolio...</p>
        </div>
      }
    >
      <div className="bg-[#101722] text-white min-h-screen">

        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-4">
          <div className="w-full max-w-[1400px]">
            <Navbar />
          </div>
        </div>

        {/* Main Content */}
        <main className="pt-24 px-4">
          <div className="max-w-[1300px] mx-auto space-y-24">

            <section id="home">
              <Home />
            </section>

            <section id="about-us">
              <AboutMe />
            </section>

            <section id="experience">
              <WorkExperince />
            </section>

            <section id="technical">
              <TechnicalSkills />
            </section>

            <section id="services">
              <Services />
            </section>

            <section id="projects">
              <MyProjects />
            </section>

            <section id="contact">
              <Contact />
            </section>

          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 px-4">
          <div className="max-w-[1400px] mx-auto">
            <Footer />
          </div>
        </footer>

      </div>
    </Suspense>
  )
}

export default App;