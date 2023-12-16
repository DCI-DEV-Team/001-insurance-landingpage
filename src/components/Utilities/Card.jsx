export default function Card(props) {
  return (
    <div className=" rounded-md">
      <img src={`./public/images/${props.cardImg}`} alt="" className=" mb-6" />
      <h3 className="font-bold text-xl text-[#093624] mb-5 font-playfair pl-7">
        {props.title}
      </h3>
      <p className="font-light max-w-[265px]  font-roboto text-[#4F4F4F] pl-7 mb-10">
        {props.description}
      </p>
    </div>
  )
}
