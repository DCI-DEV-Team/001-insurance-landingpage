import HeroSection from './components/Sections/Hero/HeroSection'
import CardSection from './components/Sections/CardSection'
import InfoSection from './components/Sections/InfoSection'
import FooterContact from './components/Sections/Footer/FooterContact'

function App() {
  return (
    <>
      <HeroSection />
      <CardSection />
      <InfoSection />
      <section className="bg-[url('public/images/Footer_bg_green.png')] pb-20 pt-10 mt-20">
        <FooterContact />
      </section>
    </>
  )
}

export default App
