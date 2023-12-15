import Navbar from './Navbar'
import Button from '../../Utilities/Button'

const HeroSection = () => {
  return (
    <div className="bg-[#0D4A31] h-screen px-12 relative">
      <Navbar />
      <img
        className="absolute bottom-0 right-56"
        src="./images/old-people.png"
      />

      {/* LEFT SIDE */}

      <h1 className="text-6xl font-medium text-white pt-12 pb-6">
        Are You Covered? <br /> Home, Life, & <br /> Auto Insurance.
      </h1>
      <p className="text-white pb-16">
        Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque
        nec, <br /> egestas non nisi. Donec rutrum congue leo eget malesuada.{' '}
      </p>

      <Button size="xl">GET STARTED</Button>
      <Button variant="secundary" size="xl">
        WATCH THE VIDEO
      </Button>

      <div className="flex gap-4 pt-20">
        <div className="bg-white rounded p-2">
          <img src="./images/jasindo.png" />
        </div>
        <div className="bg-white rounded p-2">
          <img src="./images/sinarmas.png" />
        </div>
        <div className="bg-white rounded p-1">
          <img src="./images/sequis-life.png" />
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="w-auto h-auto p-2 bg-white rounded-full absolute top-[13rem] right-96 flex items-center justify-center">
        <img src="./images/icon-earth.svg" />
      </div>
      <div className="w-auto h-auto p-2 bg-white rounded-full absolute top-[30rem] right-24 flex items-center justify-center">
        <img src="./images/icon-star.svg" />
      </div>
      <div className="w-auto h-auto p-2 bg-white rounded-full absolute top-[25rem] right-[45rem] flex items-center justify-center">
        <img src="./images/icon-lock.svg" />
      </div>

      <div className="w-48 h-14 bg-white rounded flex items-center justify-around absolute top-[40rem] right-[35rem]">
        <div className="bg-[#19AB6F] rounded flex items-center justify-center h-8 w-8">
          <img src="./images/icon-protect.svg" />
        </div>
        <p>Qualified Certified</p>
      </div>

      <img
        className="absolute top-[41rem] right-[17rem] z-10"
        src="./images/icon-quote.svg"
      />
      <div className="w-48 h-auto p-4 bg-white rounded flex items-center justify-around absolute top-[42rem] right-24">
        After using insurance, the burden on my mind feels very less
      </div>
    </div>
  )
}

export default HeroSection
