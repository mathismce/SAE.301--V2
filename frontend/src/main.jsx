import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import About from './routes/about.jsx';
import Store, {loader as StoreLoader} from './routes/store.jsx';
import Movie, {loader as MovieLoader} from './routes/accueil.jsx';
import OurTeams, {loader as OurTeamsLoader} from './routes/ourteams.jsx';
import Films, {loader as FilmsLoader} from './routes/films.jsx';
import Series, {loader as SeriesLoader} from './routes/series.jsx';
import SearchContent, {loader as SearchContentLoader} from './routes/searchContent.jsx';
import Registered from './routes/registered.jsx';
import Infos from './routes/infos.jsx';
import ErrorPage from './ui/ErrorPage'

import { Suspense } from 'react';

import './index.css';

function Loading() {
  return <h2>🌀 Chargement...</h2>;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement:<ErrorPage />,
    children: [
        {
          path: '/type/films',
          element: <Films />,
          loader: FilmsLoader,
          
        },
        {
          path: '/type/series',
          element: <Series />,
          loader: SeriesLoader,
          
        },
        {
          path: '/movie',
          element: <Movie />,
          loader: MovieLoader,
        },
        {
          path: '/search/:searchTerm',
          element: <SearchContent />,
          loader: SearchContentLoader,
        },
        {
          path: '/registered',
          element: <Registered />
        },
        {
          path: '/movie/:id',
          element: <Infos/>
        },
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}