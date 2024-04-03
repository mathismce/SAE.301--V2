import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';




export default function NavBarSecond({category}) {

  return (

    <nav className="flex 
     bg-bg-primary gap-4 justify-between shadow-dark-mild p-6">
      <SearchBar></SearchBar>
      <div className='flex gap-4 justify-items items-center'>
        <Button className="w-fit" intent="primary" size="small">Passer Premium</Button>
        <Link className="text-nav-bar-text text-base font-semibold hover:text-nav-bar-text-focus focus:nav-bar-text-focus" to="http://localhost:8080/login">Me connecter</Link>
      </div>
      


    </nav>
  );

}

