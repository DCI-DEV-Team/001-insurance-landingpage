import DataCard from '../../../data_Card'
import Card from '../Utilities/Card'
import Button from '../Utilities/Button'

export default function CardSection() {
  const cardElements = DataCard.map((element) => {
    return (
      <Card
        key={element.id}
        title={element.title}
        description={element.description}
        cardImg={element.cardImg}
      />
    )
  })

  return (
    <>
      <section className="xl:px-[200px] lg:px-[100px] px-[50px] mt-20">
        <h2 className="text-3xl  text-[#093624] my-2 font-playfair font-bold">
          Individual & Umbrella Policies
        </h2>
        <div className="border-b-4 border-[#BECEC7;] w-[56px] rounded mb-12"></div>
        <div className="flex justify-center flex-wrap flex-grow gap-6 md:flex-nowrap">
          {cardElements}
        </div>
        <div className="flex justify-center mt-10">
          <Button size="lg">Browse All Policies</Button>
        </div>
      </section>
    </>
  )
}
