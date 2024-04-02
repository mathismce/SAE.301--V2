import NavBar from '../ui/NavBar'
import { Outlet } from 'react-router-dom';
import NavBarSecond from '../ui/NavBar/NavBarSecond';

export default function Root() {

  return (
    <>
      <section className='flex bg-gradient-to-r from-bg-primary to-bg-secondary w-full h-full'>
        <NavBar/>
        <section className='flex flex-col flex-1'>
          <NavBarSecond/>
          <Outlet />
        </section>
        
      </section>
    </>
  );
}
