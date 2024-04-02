import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';




export default function NavBarSecond({category}) {

  return (

    <nav className="flex 
     bg-bg-primary gap-4 justify-between shadow-dark-mild p-6">
      

      <SearchBar></SearchBar>
      <Button className="w-fit" intent="primary" size="small">Passer Premium</Button>




    </nav>
  );

}

