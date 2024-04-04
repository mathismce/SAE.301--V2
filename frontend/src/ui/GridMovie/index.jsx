import React from 'react';
import CardMovie from '../CardMovie/Card';
import Carousel from 'react-grid-carousel';

function GridMovie({ data }) {


    let categories = [];
    data.forEach(card => {
        const categoryName = card.category[0].name;
        if (!categories.includes(categoryName)) {
            categories.push(categoryName);
        }
    });


    let categoryElements = categories.map((category, index) => {
        const categoryData = data.filter(card => card.category[0].name === category);

        const categoryCards = categoryData.map((card) => (
            <Carousel.Item key={card.id}>
                <CardMovie
                    name={card.name}
                    urlImage={card.urlImage}
                    category={card.category[0].name}
                />
            </Carousel.Item>
        ));

        return (
            <div key={index}>
                <h2 className='text-white text-lg font-semibold font-body'>{category}</h2>
                <div className='flex gap-2'>
                    <Carousel cols={8} rows={1} gap={10} loop>
                        {categoryCards}
                    </Carousel>
                </div>
            </div>
        );
    });

    return (
        <div className='p-4 flex flex-col gap-12'>
            {categoryElements}
        </div>
    );
}

export default GridMovie;
