import { fetchMovieBySearch } from '../lib/loaders';
import CardMovie from '../ui/CardMovie/Card';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
    let movieByTypeData = await fetchMovieBySearch(params.searchTerm);
    return movieByTypeData;
}

export default function SearchContent() {
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
            />
        </li>
    ));

    return (
        <div>
            <ul className='flex gap-4'>
                {Cards}
            </ul>
        </div>
    );

}
