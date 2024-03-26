import CardMovie from "./Card.jsx";


export default function Cards(data) {
    console.log(data)
  let cards = data.cards.map((card) => {
    // console.log(index);
    return (
      <li key={card.id}>
        <CardMovie
          name={card.name}
        />
      </li>
    );
  });
  return (
    <section className="text-foreground m-auto max-w-6xl p-4 text-center">
      
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {cards}
        </ul>
   
    </section>
  );
}
