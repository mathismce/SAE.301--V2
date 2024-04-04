import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { getCookie } from '../../lib/utils';

export default function NavBarSecond() {
  let userEmail = getCookie('user_mail');

  return (
    <nav className="flex bg-bg-primary gap-4 justify-between shadow-dark-mild p-4 md:p-6">
      <SearchBar></SearchBar>
      <div className='flex gap-4 justify-items items-center'>
        

        {userEmail ? (
          <>
          
          <p className='text-nav-bar-text text-base font-semibold md:w-fit w-36 overflow-hidden whitespace-nowrap max-w-full truncate'>{userEmail}</p>
          <details className='relative cursor-pointer'>
            <summary>
            <svg className='cursor-pointer' class="-qGOk MFrdL" height="24" viewBox="0 0 24 24" width="24" fill="#7b7f8d">
              <path d="m19.65 12.975c.039-.313.064-.637.064-.975s-.025-.662-.077-.975l2.173-1.65a.507.507 0 0 0 .129-.637l-2.057-3.463a.53.53 0 0 0 -.63-.225l-2.559 1a7.588 7.588 0 0 0 -1.736-.975l-.386-2.65a.51.51 0 0 0 -.514-.425h-4.114a.496.496 0 0 0 -.502.425l-.385 2.65a7.77 7.77 0 0 0 -1.736.975l-2.559-1a.515.515 0 0 0 -.63.225l-2.057 3.463a.476.476 0 0 0 .129.637l2.173 1.65c-.052.313-.09.65-.09.975s.025.662.077.975l-2.173 1.65a.507.507 0 0 0 -.129.637l2.057 3.463c.129.225.399.3.63.225l2.559-1c.54.4 1.106.725 1.736.975l.386 2.65c.05.25.257.425.514.425h4.114c.257 0 .476-.175.502-.425l.385-2.65a7.791 7.791 0 0 0 1.736-.975l2.559 1c.231.088.501 0 .63-.225l2.057-3.463a.476.476 0 0 0 -.129-.637zm-7.65 2.775c-2.121 0-3.857-1.688-3.857-3.75 0-2.063 1.736-3.75 3.857-3.75s3.857 1.688 3.857 3.75c0 2.063-1.736 3.75-3.857 3.75z" fill-rule="#7b7f8d"></path>
            </svg>
            </summary>
            <div className='w-64 h-80 flex flex-col absolute bg-bg-secondary top-10 right-0 rounded p-6 justify-center'>
              <div className='flex flex-col gap-2'>
                <img className='w-10 rounded-full' src="/assets/icon/logo.png" alt="logo" />
              <p className='text-white text-lg font-semibold '>{userEmail}</p>
              </div>
              
              <hr className="border-t border-gray-500 my-3" />
              <ul className='flex flex-col text-nav-bar-text gap-1 '>
                <li>Mon compte</li>
                <li>Options et chaines</li>
                <li>Molotov sur mon téléviseur</li>
                <li>Molotov en Europe</li>
                <li>Aide et Contact</li>
              </ul>
              <hr className="border-t border-gray-500 my-3" />
              <Link className="text-nav-bar-text text-base font-semibold hover:text-nav-bar-text-focus focus:nav-bar-text-focus " to="http://localhost:8080/logout">Se déconnecter</Link>
            </div>
          </details>
          </>
        ) : (
          <>
            <Link to="http://localhost:8080/register">
              <Button className="w-fit" intent="primary" size="small">S'abonner</Button>
            </Link>
            <Link className="text-nav-bar-text text-base font-semibold hover:text-nav-bar-text-focus focus:nav-bar-text-focus " to="http://localhost:8080/login">Se connecter</Link>
          </>
        
        )}
      </div>
    </nav>
  );
}


