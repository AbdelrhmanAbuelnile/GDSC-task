
// import './App.css'
import ChooseUs from './components/ChooseUs'
import Header from './components/Header'
import Hero from './components/Hero'
import ArticlesSection from './components/ArticlesSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='w-screen min-h-screen overflow-x-hidden relative'>
        <Header />
        <Hero />
        <ChooseUs />
        <ArticlesSection />
        <Footer />
      </div>
    </>
  )
}

export default App
