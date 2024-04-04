import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';




export default function NavBarSecond({ category }) {

  return (

    <nav className="flex 
     bg-bg-primary gap-4 justify-between shadow-dark-mild p-6">
      <SearchBar></SearchBar>
      <div className='flex gap-4 justify-items items-center'>
        <Link to="http://localhost:8080/register">
          <Button className="w-fit" intent="primary" size="small">S'abonner</Button>
        </Link>

        <details className='relative'>
          <summary>
            <svg className='cursor-pointer' class="-qGOk MFrdL" height="24" viewBox="0 0 24 24" width="24" fill="#7b7f8d">
              <path d="m19.65 12.975c.039-.313.064-.637.064-.975s-.025-.662-.077-.975l2.173-1.65a.507.507 0 0 0 .129-.637l-2.057-3.463a.53.53 0 0 0 -.63-.225l-2.559 1a7.588 7.588 0 0 0 -1.736-.975l-.386-2.65a.51.51 0 0 0 -.514-.425h-4.114a.496.496 0 0 0 -.502.425l-.385 2.65a7.77 7.77 0 0 0 -1.736.975l-2.559-1a.515.515 0 0 0 -.63.225l-2.057 3.463a.476.476 0 0 0 .129.637l2.173 1.65c-.052.313-.09.65-.09.975s.025.662.077.975l-2.173 1.65a.507.507 0 0 0 -.129.637l2.057 3.463c.129.225.399.3.63.225l2.559-1c.54.4 1.106.725 1.736.975l.386 2.65c.05.25.257.425.514.425h4.114c.257 0 .476-.175.502-.425l.385-2.65a7.791 7.791 0 0 0 1.736-.975l2.559 1c.231.088.501 0 .63-.225l2.057-3.463a.476.476 0 0 0 -.129-.637zm-7.65 2.775c-2.121 0-3.857-1.688-3.857-3.75 0-2.063 1.736-3.75 3.857-3.75s3.857 1.688 3.857 3.75c0 2.063-1.736 3.75-3.857 3.75z" fill-rule="#7b7f8d"></path>
            </svg>
          </summary>
          <div className='absolute bg-red-500 top-10 right-2 rounded'>
            <Link className="text-nav-bar-text text-base font-semibold hover:text-nav-bar-text-focus focus:nav-bar-text-focus " to="http://localhost:8080/login">se connecter
          </Link>
          <Link className="text-nav-bar-text text-base font-semibold hover:text-nav-bar-text-focus focus:nav-bar-text-focus " to="http://localhost:8080/login">se déconnecter
          </Link>
          </div>
          
        </details>





      </div>



    </nav>
  );

}

