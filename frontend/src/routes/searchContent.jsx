import { fetchMovieBySearch } from '../lib/loaders';
import CardMovie from '../ui/CardMovie/Card';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export async function loader({ params }) {
    let movieData = await fetchMovieBySearch(params.searchTerm);
    return movieData;
}

export default function SearchContent() {

    const navigate = useNavigate();

    const handleCardClick = (cardData) => {
        // Naviguer vers la page d'informations avec les données de la carte sélectionnée
        // Assurez-vous que votre route est correctement configurée pour accepter les paramètres, par exemple : `/movie/:id`
        const url = `/movie/${cardData.id}?name=${encodeURIComponent(cardData.name)}&urlImage=${encodeURIComponent(cardData.urlImage)}&category=${encodeURIComponent(cardData.category[0].name)}`;
        console.log(url);
        navigate(url);
    };


    const data = useLoaderData();
    console.log(data)

    if (!data) {
        return <div>No results found</div>;
    }

    if (data.length === 0) {
        return <div className='text-red-500'>No results found</div>;
    }

    const Cards = data.map((card) => (
        <li className='list-none' key={card.id}>
            <CardMovie
                name={card.name}
                urlImage={card.urlImage}
                category={card.category[0].name}
                onClick={() => handleCardClick(card)}
            />
        </li>
    ));

    
    return (
        <div>
            <ul className='flex gap-4 p-4'>
                {Cards}
            </ul>
        </div>
    );

}
