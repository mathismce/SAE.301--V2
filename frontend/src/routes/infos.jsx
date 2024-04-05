import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        <div className='p-6'>
            <button>
                    <Link to="/movie">Retour à la page Movie</Link>
            </button>
            <div className='flex gap-4'>
                <img className='rounded-md' src={"/assets/images/" + urlImage} alt={name} />
                <div>
                    <p className='text-2xl text-title font-semibold'>{name}</p>
                    <p>{category}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button>Voir le Film</button>
                    <button>Ajouter aux favoris</button>
                {/* Affichez d'autres détails du film ici */}
                </div>
                
                
            </div>
        </div>


    );

}

export default Infos;
