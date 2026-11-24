import { SkipLink } from './components/layout/SkipLink'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { ProfessionalExperience } from './components/sections/ProfessionalExperience'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { DevOpsJourney } from './components/sections/DevOpsJourney'
import { Contact } from './components/sections/Contact'
import { BackToTop } from './components/layout/BackToTop'

function App() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <ProfessionalExperience />
        <Skills />
        <Projects />
        <DevOpsJourney />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
