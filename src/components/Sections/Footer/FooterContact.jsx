import FooterForm from './FooterForm'

export default function FooterContact() {
  return (
    <>
      <div className="xl:px-[200px] lg:px-[100px] px-[50px] mt-20 font-roboto">
        {/* Heading Contact Us */}
        <h4 className="text-3xl font-roboto font-bold text-white">
          Contact Us
        </h4>
        {/* hr */}
        <div className="border-b-4 border-white w-[56px] rounded mb-10 pt-2"></div>
        <div className="flex flex-col gap-7 md:flex-row md:items-end">
          {/* Left side */}
          <div className="flex flex-col w-full md:w-1/2">
            <p className="mb-10 text-white">
              Proin eget tortor risus. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
              malesuada. Nulla porttitor accumsan tincidunt. Donec rutrum congue
              leo eget malesuada.
            </p>
            {/* Wrapper Contact Data */}
            <div className="bg-white w-full p-7 rounded-md ">
              <div className="flex gap-5 mb-4">
                {/* Email Icon */}
                <div className="postion relative flex justify-center items-center">
                  <img src="public/images/Contact_Kreis.png" alt="" />
                  <img
                    src="public/images/Contact_Logo_Email.png"
                    alt=""
                    className="absolute"
                  />
                </div>
                {/* Email Text */}
                <div className="flex flex-col">
                  <p className="font-medium text-[#093624]">Email</p>
                  <p className="font-light text-[#595959]">
                    inte_ger@yahoo.com
                  </p>
                </div>
              </div>
              <div className="flex gap-5 mb-4">
                {/* Phone Icon */}
                <div className="postion relative flex justify-center items-center">
                  <img
                    src="public/images/Contact_Kreis.png"
                    alt=""
                    className=""
                  />
                  <img
                    src="public/images/Contact_Logo_Phone.png"
                    alt=""
                    className="absolute"
                  />
                </div>
                {/* Phone Text */}
                <div className="flex flex-col">
                  <p className="font-medium text-[#093624]">Phone</p>
                  <p className="font-light text-[#595959]">
                    +62 1404 5123 12312
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                {/* Address Icon */}
                <div className="postion relative flex justify-center items-center">
                  <img
                    src="public/images/Contact_Kreis.png"
                    alt=""
                    className="min-w-[48px]"
                  />
                  <img
                    src="public/images/Contact_Logo_Address.png"
                    alt=""
                    className="absolute"
                  />
                </div>
                {/* Address Text */}
                <div className="flex flex-col">
                  <p className="font-medium text-[#093624]">Address</p>
                  <p className="font-light text-[#595959]">
                    Jl. Jend. Sudirman No.Kav 48A, RT.5/RW.4, Karet Semanggi,{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Rightside */}
          <FooterForm />
        </div>
      </div>
    </>
  )
}
