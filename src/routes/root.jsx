import { Link, Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <nav className="bg-slate-800 h-16 text-white ">
        <ul className=" h-full flex justify-evenly items-center font-roboto font-bold ">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'reserva'}>Reserva</Link>
          </li>
          <li>
            <Link to={'contacto'}>Contacto</Link>
          </li>
        </ul>
      </nav>
      <main className="w-full min-h-screen bg-gray-900 text-white font-roboto pb-4 ">
        <Outlet />
      </main>
      <footer>
        <p className="text-center text-white font-roboto font-bold bg-gray-900 ">
          © 2022 Restaurant-e
        </p>
      </footer>
    </>
  );
};

export default Root;
