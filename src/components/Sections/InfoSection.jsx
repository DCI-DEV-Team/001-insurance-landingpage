import DataInfo from '../../../data_InfoSection'
import Info from '../Utilities/Info'
import Button from '../Utilities/Button'

export default function InfoSection() {
  const infoElements = DataInfo.map((info) => {
    return <Info key={info.id} count={info.count} name={info.name} />
  })
  return (
    <>
      <section className="px-[50px] lg:px-[100px] xl:px-[200px] mt-20">
        <div className="flex xl:justify-between justify-center items-center gap-6 flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2 h-full flex flex-col gap-4 justify-center lg:pr-20">
            <h2 className="text-3xl font-bold text-[#093624]">
              Experienced Agents <br></br> You Can Trust
            </h2>
            <div className="border-b-4 border-[#BECEC7;] w-[56px] rounded mb-4"></div>
            <p className="text-[#4F4F4F] font-light leading-9">
              Proin eget tortor risus. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
              malesuada. Nulla porttitor accumsan tincidunt. Donec rutrum congue
              leo eget malesuada.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#1F8058] to-[#0D4A31] w-full md:w-5/6 lg:w-1/2 h-72 md:h-96 rounded-lg grid grid-cols-2 grid-rows-2 lg:ml-2">
            <div className="border-r-2 border-b-2 border-[#ADB2FF] flex justify-center items-center text-center">
              {infoElements[0]}
            </div>
            <div className="border-b-2 border-[#ADB2FF] flex justify-center items-center text-center">
              {infoElements[1]}
            </div>
            <div className="border-r-2 border-[#ADB2FF] flex justify-center items-center text-center">
              {infoElements[2]}
            </div>
            <div className="relative">
              <div className="absolute bg-white -right-4 -left-4 -top-4 p-4 md:p-8 flex flex-col gap-4 rounded-lg shadow-2xl items-center">
                <h3 className="text-xl font-bold text-[#093624] text-center">
                  Free Consultation
                </h3>
                <p className="text-center text-[#595959] font-light leading-6">
                  Proin eget tortor risus. Praesent sapien massa, convallis.
                </p>
                <Button>Chat now</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 md:mt-20 flex xl:justify-between justify-center items-center gap-6 flex-wrap-reverse lg:flex-nowrap">
          <div className="w-5/6 lg:w-1/2 h-72 md:h-96 flex flex-col gap-4 justify-center items-center lg:pr-20">
            <img
              src="./images/info-section-img.png"
              alt="Info Section Image, a Agent having a meeting with a Customer"
              className="[clip-path:inset(0%_0%_0%_0%_round_20%_3%_20%_3%);] h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col gap-4 justify-center lg:pr-20">
            <h2 className="text-3xl font-bold text-[#093624]">
              We Got You Covered. Don’t <br></br> Get Caught Off Guard
            </h2>
            <div className="border-b-4 border-[#BECEC7;] w-[56px] rounded mb-4"></div>
            <p className="text-[#4F4F4F] font-light leading-9">
              Proin eget tortor risus. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
              malesuada. Nulla porttitor accumsan tincidunt. Donec rutrum congue
              leo eget malesuada.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
