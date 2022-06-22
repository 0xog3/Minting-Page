import Alert from './components/Alert'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'
import { loadWeb3 } from './Adulam'
import { useEffect } from 'react'
import SlideShow from './components/SlideShow'
import Artworks from './components/ArtWorks'
const App = () => {
  useEffect(() => loadWeb3(), [])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
        <SlideShow />
      </div>
      <Artworks />
      <Footer />
      <Loading />
      <Alert />
      
    </div>
  )
}

export default App
