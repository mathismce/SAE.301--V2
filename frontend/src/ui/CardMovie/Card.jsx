export default function CardMovie({name, urlImage, category, onClick}) {
    return (
      <figure className="w-full cursor-pointer  hover:brightness-75" onClick={() => onClick({ name, urlImage, category })}>
        <figcaption className="">
          <img className="rounded max-w-6" src={"/assets/images/" + urlImage} alt={name}></img>
        </figcaption>
      </figure>
    );
  }
  