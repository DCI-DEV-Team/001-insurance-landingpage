import Button from '../../Utilities/Button'

export default function FooterForm() {
  return (
    <>
      {/* Contact Form */}
      <div className="p-7 flex justify-center bg-white  rounded-md md:w-1/2 ">
        <form action="POST" className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded-md mb-6 outline outline-1 outline-[#9f9f9f]"
          />
          <input
            type="email"
            placeholder="Email Adress"
            className="p-2 rounded-md mb-6 outline outline-1 outline-[#9f9f9f]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-2 rounded-md mb-6 outline outline-1 outline-[#9f9f9f]"
          />
          <input
            type="text"
            placeholder="Message"
            className="p-2 rounded-md mb-6 outline outline-1 outline-[#9f9f9f]"
          />
          <Button size="lg">Submit</Button>
        </form>
      </div>
    </>
  )
}
