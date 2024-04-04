import { fetchMovieByType } from '../lib/loaders';
import GridMovie from '../ui/GridMovie/index';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    let movieByTypeData = await fetchMovieByType(2);
    return movieByTypeData;
}

export default function Films() {
    const data = useLoaderData(loader);

    return (
        <GridMovie data={data} />
    );
}
