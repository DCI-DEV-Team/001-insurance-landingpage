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
      <section className="px-[200px] mt-20">
        <h2 className="text-3xl  text-[#093624] my-2 font-playfair mb-12">
          Individual & Umbrella Policies
        </h2>

        <div className="flex gap-7 justify-between">{cardElements}</div>
        <div className="flex justify-center mt-10">
          <Button size="lg">Browse All Policies</Button>
        </div>
      </section>
    </>
  )
}
