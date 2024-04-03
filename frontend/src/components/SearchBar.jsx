import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${searchTerm}`);

    };

    return (
        <div>
            <form className="relative" onSubmit={handleSubmit}>
                <div className="relative">
                    <svg class="TnwCc" width="12" height="12" viewBox="0 0 12 12" className="absolute left-3.5 top-3">
                        <path d="M12 11.05l-3.67-3.6c.65-.8.93-1.7.93-2.82C9.26 2.07 7.18 0 4.63 0 2.07 0 0 2.07 0 4.63c0 2.55 2.07 4.63 4.63 4.63 1.1 0 1.96-.25 2.76-.9l3.65 3.6.94-.9zM.93 4.63c0-2.05 1.65-3.7 3.7-3.7 2.04 0 3.7 1.65 3.7 3.7 0 2.04-1.66 3.7-3.7 3.7-2.05 0-3.7-1.66-3.7-3.7z" fill="#8E8E93" fill-rule="evenodd"></path>
                    </svg>
                    <input
                        className="rounded-3xl text-xs text-gray-300 cursor-text h-9 leading-9 w-full sm:w-96 px-8 bg-search-bar focus:outline-none focus:ring-1 focus:ring-search-bar-focus focus:border-red-500 focus:bg-search-bar-bg-focus transition duration-500 ease-in-out pl-10"
                        type="text"
                        placeholder="Search"
                        value={searchTerm} // La valeur du champ de recherche est liée à l'état local
                        onChange={handleChange} // Gestionnaire d'événements pour mettre à jour la valeur du champ de recherche
                    />
                </div>
            </form>
        </div>
    );
}
