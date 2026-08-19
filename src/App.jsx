import { SkipLink } from './components/layout/SkipLink'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { WhatIBuild } from './components/sections/WhatIBuild'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { DevOpsJourney } from './components/sections/DevOpsJourney'
import { CurrentlyBuilding } from './components/sections/CurrentlyBuilding'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <WhatIBuild />
        <Skills />
        <Projects />
        <DevOpsJourney />
        <CurrentlyBuilding />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
