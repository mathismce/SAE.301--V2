import { fetchMovieByType } from '../lib/loaders';
import CardMovie from '../ui/CardMovie/Card';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    let movieByTypeData = await fetchMovieByType(1);
    return movieByTypeData;
}

export default function Type() {
    const data = useLoaderData();
    console.log(data)
    

    let categories = [];
    data.forEach(card => {
        const categoryName = card.category[0].name;
        if (!categories.includes(categoryName)) {
            categories.push(categoryName);
        }
    });

    let categoryElements = categories.map((category, index) => {
        const categoryData = data.filter(card => card.category[0].name == category);

        const categoryCards = categoryData.map((card) => (
            <li className='list-none' key={card.id}>
                <CardMovie
                    name={card.name}
                    urlImage={card.urlImage}
                    category={card.category[0].name}
                />
            </li>
        ));

        return (
            <div key={index}>
                <h2 className='text-white text-lg font-semibold font-body'>{category}</h2>
                <ul className='flex gap-4'>
                    {categoryCards}
                </ul>
            </div>
        );
    });

    return (
        <div className='p-4 flex flex-col gap-6'>
            {categoryElements}
        </div>
    );

}
