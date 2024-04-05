import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ButtonSquare from '../components/ButtonSquare';
import Button from '../components/Button';

function Infos() {
    const location = useLocation();
    const { pathname, search } = location;

    // Récupérer l'URL complète
    const fullURL = pathname + search;
    console.log(fullURL)

    const params = new URLSearchParams(search);
    const name = params.get('name');
    const urlImage = params.get('urlImage');
    const category = params.get('category');


    return (
        <div className='p-6 items-center '>
            <div className='flex flex-col sm:flex-row gap-4 max-w-64 max-h-72 md:w-[50rem] '>
                <img className='h-48 w-fill object-cover sm:w-fit sm:h-fit rounded-md' src={"/assets/images/" + urlImage} alt={name} />
                <div className='flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <p className='text-2xl text-title font-semibold'>{name}</p>
                        <Link to="/movie">
                            <ButtonSquare intent={"square"} className={"group"}></ButtonSquare>
                        </Link>

                    </div>

                    <p className='text-title-secondary pb-4'>{category}</p>
                    <p className='text-title-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className='flex gap-4 pt-4'>
                        <Button intent={"primary"} size={"small"}>Voir le Film
                        </Button>
                        <Button intent={"secondary"} size={"small"}>Ajouter aux favoris
                        </Button>
                    </div>


                </div>


            </div>
        </div>


    );

}

export default Infos;
