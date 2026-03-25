import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Project from "./components/Projects"
import Resume from "./components/Resume"
import Skills from "./components/Skils"

function App() {

  return (
    <div className="font-sans antialiased">
      <Header />
      <main>
        <Hero/>
        <About />
        <Project />
        <Resume/>
        <Skills />
        <Contact />
      </main>
      <footer className="bg-[#1e2326] py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        &copy; {new Date().getFullYear()} Abraham - Software Engineering
      </footer>
    </div>
  )
}

export default App
