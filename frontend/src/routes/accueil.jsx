import { fetchApiMovie } from '../lib/loaders';
import GridMovie from '../ui/GridMovie/index';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    let movieData = await fetchApiMovie();
    return movieData;
}

export default function Accueil() {
    const data = useLoaderData(loader);

    return (
        <GridMovie data={data} />
    );
}
