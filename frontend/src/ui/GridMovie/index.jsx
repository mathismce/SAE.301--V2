import React from 'react';
import CardMovie from '../CardMovie/Card';
import Carousel from 'react-grid-carousel';
import { useNavigate } from 'react-router-dom';

function GridMovie({ data }) {


    const navigate = useNavigate();


    const handleCardClick = (cardData) => {
        // Naviguer vers la page d'informations avec les données de la carte sélectionnée
        // Assurez-vous que votre route est correctement configurée pour accepter les paramètres, par exemple : `/movie/:id`
        const url = `/movie/${cardData.id}?name=${encodeURIComponent(cardData.name)}&urlImage=${encodeURIComponent(cardData.urlImage)}&category=${encodeURIComponent(cardData.category[0].name)}`;
        console.log(url);
        navigate(url);
    };

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
                    onClick={() => handleCardClick(card)}
                />
            </Carousel.Item>
        ));

        let colNum = 6;


        if (window.innerWidth > 768 && window.innerWidth < 1024) {
            colNum = 8;
        }

        if (window.innerWidth > 1024) {
            colNum = 10;
        }


        return (
            <div key={index}>
                <h2 className='text-white text-lg font-semibold font-body'>{category}</h2>
                <div className='flex gap-2'>
                    <Carousel cols={colNum} rows={1} gap={10} loop>
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
