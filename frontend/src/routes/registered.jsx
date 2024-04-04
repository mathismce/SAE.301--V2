import React from 'react';
import { getCookie } from '../lib/utils';


export default function Registered() {

    // Récupérer l'email à partir du cookie 'user_email'
    const userEmail = getCookie('user_mail');
    console.log(userEmail);

    return (
        <div className='p-16 flex flex-col gap-12 items-center justify-center '>
            <p className='text-lg text-nav-bar-text'>Bienvenue sur votre appliction Molotov {userEmail}</p>
        </div>
    );
}
