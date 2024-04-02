export default function CardMovie({name, urlImage, category}) {
    return (
      <figure className="w-28 cursor-pointer hover:scale-105 hover:brightness-75">
        <figcaption className="">
          <img className="rounded max-w-6" src={"/assets/images/" + urlImage} alt={name}></img>
        </figcaption>
      </figure>
    );
  }
  