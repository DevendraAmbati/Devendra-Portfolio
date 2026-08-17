import { lazy, Suspense, useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import VoiceAssistant from "./components/VoiceAssistant";
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const WorkExperince = lazy(() => import("./pages/WorkExperince"));
const TechnicalSkills = lazy(() => import("./pages/TechnicalSkills"));
const Services = lazy(() => import("./pages/Services"));
const MyProjects = lazy(() => import("./pages/MyProjects"));
const Contact = lazy(() => import("./pages/Contact"));

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#101722] text-white">
      <div className="relative flex items-center justify-center">
        <div className="h-24 w-24 rounded-full border border-white/10 border-t-cyan-400 animate-spin" />
        <div className="absolute h-16 w-16 rounded-full border border-white/10 border-b-blue-500 animate-[spin_1.5s_linear_infinite_reverse]" />
        <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.5)] animate-pulse">
          <span className="text-sm font-bold text-white">DA</span>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold tracking-[0.35em] text-white">
          DEVENDRA
        </h2>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="text-sm tracking-widest text-gray-400">
            Loading Portfolio
          </span>

          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce" />
            <span
              className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[loading_1.5s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-[#101722] text-white min-h-screen">
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
          <VoiceAssistant />

      </div>
    </Suspense>
  );
}

export default App;
