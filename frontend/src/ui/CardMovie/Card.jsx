export default function CardMovie({name, urlImage}) {
    return (
      <figure className="w-full cursor-pointer  hover:brightness-75">
        <figcaption className="">
          <img className="rounded max-w-6" src={"/assets/images/" + urlImage} alt={name}></img>
        </figcaption>
      </figure>
    );
  }
  