import { fetchApiMovie } from '../lib/loaders';
import CardMovie from '../ui/CardMovie/Card';
import { useLoaderData } from 'react-router-dom';


export async function loader() {
    let movieData = await fetchApiMovie()
    return movieData;
}


export default function Movie() {
  
  const data = useLoaderData()
  console.log(data)

  let cards = data.map((card) => {
    // console.log(index);
    return (
      <li className='list-none' key={card.id}>
        <CardMovie
          name={card.name}
          urlImage={card.urlImage}
        />
      </li>
    );
  });
  return (
    <div className='flex'>
      {cards}
    </div>
  )
}
