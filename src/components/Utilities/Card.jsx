export default function Card(props) {
  return (
    <div className="flex flex-col flex-grow rounded-md">
      <img
        src={`./public/images/${props.cardImg}`}
        alt=""
        className=" mb-6 w-auto sm:w-[350px] mx-auto rounded-md"
      />
      <h3 className="font-bold text-xl text-[#093624] mb-5 font-playfair md:pl-7">
        {props.title}
      </h3>
      <p className="font-light md:max-w-[265px]  font-roboto text-[#4F4F4F]  md:pl-7 mb-10 sm:max-w-full">
        {props.description}
      </p>
    </div>
  )
}
