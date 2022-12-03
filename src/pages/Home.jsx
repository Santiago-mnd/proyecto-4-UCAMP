import { Link } from 'react-router-dom';

import Platos from '../components/Platos';

import { mainImage } from '../db/images';

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center p-4 font-bebas bg-gray-200 text-black ">
        Restaurant-e
      </h1>
      <section className="grid grid-rows-2 mx-auto mt-4 bg-gray-200 text-black w-11/12 md:grid-cols-2 md:w-9/12 md:grid-rows-none ">
        <div className="flex justify-center items-center p-8">
          <p className=" font-bold md:text-2xl ">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Est ullamco ullamco nostrud
            est incididunt irure ullamco sunt magna mollit
            laboris do. Do eu tempor adipisicing culpa
            tempor excepteur eu dolor magna. Sint irure
            ullamco in laborum ex laborum non deserunt ex
            consectetur veniam amet officia.
          </p>
        </div>
        <div className=" w-full h-full overflow-hidden">
          <img
            className="block max-w-full h-full object-cover"
            src={mainImage}
            alt=""
          />
        </div>
      </section>
      <section className="mt-4">
        <h2 className="font-bold text-3xl p-4 font-bebas mb-4 bg-gray-200 text-black flex items-center justify-center">
          Nuestros platos
        </h2>
        <div className="grid grid-cols-1 gap-4 mx-auto w-11/12 md:grid-cols-2 md:w-9/12 ">
          <Platos
            nombre="Plato 1"
            precio="100"
            ing1="Ingrediente 1"
            ing2="Ingrediente 2"
            ing3="Ingrediente 3"
            ing4="Ingrediente 4"
          />
          <Platos
            nombre="Plato 2"
            precio="200"
            ing1="Ingrediente 1"
            ing2="Ingrediente 2"
            ing3="Ingrediente 3"
            ing4="Ingrediente 4"
          />
          <Platos
            nombre="Plato 3"
            precio="300"
            ing1="Ingrediente 1"
            ing2="Ingrediente 2"
            ing3="Ingrediente 3"
            ing4="Ingrediente 4"
          />
          <Platos
            nombre="Plato 4"
            precio="400"
            ing1="Ingrediente 1"
            ing2="Ingrediente 2"
            ing3="Ingrediente 3"
            ing4="Ingrediente 4"
          />
        </div>
      </section>
      <section>
        <Link className="bg-gray-200 text-black mx-auto block mt-8 w-full text-3xl font-bold font-bebas p-4 text-center duration-300 hover:scale-105" to={'reserva'}>
            ¡Reserva ahora!
        </Link>
      </section>
    </div>
  );
};

export default Home;
