export default function CardMovie({name, urlImage}) {
    return (
      <figure className="aspect-card grid cursor-pointer overflow-hidden rounded duration-300 md:hover:scale-105">
        <div className="col-start-1 col-end-1 row-start-1 row-end-1">
          
        </div>
        <figcaption className="bg-shape text-foreground col-start-1 col-end-1 row-start-1 row-end-1 mx-4 mb-6 mt-4 self-end rounded bg-cover bg-center bg-no-repeat px-2 py-6">
          <h2 className="mb-1">{name}</h2>
          <img src={"/assets/images/" + urlImage} alt={name}></img>
        </figcaption>
      </figure>
    );
  }
  