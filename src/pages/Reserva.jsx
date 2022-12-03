import { useEffect, useState } from 'react';

import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Link } from 'react-router-dom';

const Reservaciones = () => {
  const [reservaciones, setReservaciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reserva, setReserva] = useState({
    cliente: {
      nombre: '',
      apellido: '',
    },
    fecha: new Date(),
    total_asistentes: 0,
    vip: false,
  });

  const getData = async () => {
    onSnapshot(collection(db, 'reservas'), (snapshot) => {
      setReservaciones(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    });
    // setUsers(snapshot.docs.map(doc => doc.data()))
  };

  useEffect(() => {
    getData();
  }, []);


  const { cliente, fecha, total_asistentes, vip } = reserva;

  const postData = async (reservacion) => {
    try {
      setLoading(true);
      setReserva({
        ...reserva, 
        fecha: new Date(fecha).getTime(),
      });
      const reservaData = await addDoc(collection(db, "reservas"), reservacion);
      if (reservaData.nombre) alert('Reservacion creada con exito');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cliente.nombre.trim() || !cliente.apellido.trim() || !fecha || !total_asistentes) {
      alert('Datos incompletos');
      return;
    }
    
    postData(reserva);

    setReserva({
      cliente: {
        nombre: '',
        apellido: '',
      },
      fecha: '',
      total_asistentes: 0,
      vip: false,
    });
  };

  return (
    <div className="w-full">
      <h2 className="text-center font-bebas font-bold text-3xl p-4">
        Hacer una resservación
      </h2>
      <section className="grid grid-rows-2 mx-auto mt-4 bg-gray-200 text-black w-11/12 md:grid-cols-2 md:w-9/12 md:grid-rows-none ">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mx-auto flex flex-col justify-center items-center py-4 "
        >
          <h2 className="font-bold text-center text-3xl mb-8">
            ¡Reserva aquí!
          </h2>
          <label className="font-bold" htmlFor="nombre">
            Nombre:
          </label>
          <input
            onChange={(e) =>
              setReserva({
                ...reserva,
                cliente: {
                  ...cliente,
                  nombre: e.target.value,
                },
              })
            }
            className=" p-2 rounded-md "
            type="text"
            name="nombre"
            id="nombre"
            value={cliente.nombre}
          />
          <label className="font-bold" htmlFor="apellido">
            Apellido:
          </label>
          <input
            onChange={(e) =>
              setReserva({
                ...reserva,
                cliente: {
                  ...cliente,
                  apellido: e.target.value,
                },
              })
            }
            className=" p-2 rounded-md "
            type="text"
            name="apellido"
            id="apellido"
            value={cliente.apellido}
          />
          <label className="font-bold" htmlFor="asistentes">
            Asistentes:
          </label>
          <input
            onChange={(e) =>
              setReserva({
                ...reserva,
                total_asistentes: Number(e.target.value),
              })
            }
            className=" p-2 rounded-md "
            type="number"
            name="asistentes"
            id="asistentes"
            value={total_asistentes}
          />
          <label className="font-bold" htmlFor="vip">
            ¿Desea mesa VIP?
          </label>
          <input
            onChange={() =>
              setReserva({
                ...reserva,
                vip: !vip,
              })
            }
            className="w-4 h-4 text-gray-900 checked:bg-gray-900  "
            type="checkbox"
            name="vip"
            id="vip"
            value={vip}
          />
          <hr />
          <label className="mt-4 font-bold" htmlFor="fecha">
            Fecha:
          </label>
          <input
            onChange={(e) =>
              setReserva({
                ...reserva,
                fecha: e.target.value,
              })
            }
            className="text-black p-4 rounded-md font-bold "
            id="fecha"
            name="fecha"
            type="datetime-local"
            value={fecha}
          />
          <button 
            className="mx-auto block mt-8 w-full text-white text-xl font-bold p-4 bg-gray-900 mb-4 rounded-md duration-300 hover:scale-105 " 
            disabled={loading} 
          >
            ¡Reserva ahora!
          </button>
        </form>
        <div className="w-full mx-auto py-4">
          <h3 className="text-center font-bold text-3xl">
            Reservaciones actuales
          </h3>
          <div className='w-11/12 mx-auto mt-10 rounded-md ' >
            <ul className="grid grid-cols-1 gap-4">
              {
                reservaciones.length !== 0 && reservaciones.map(Sreservacion => (
                  <Link to={`/reservaciones/${Sreservacion.id}`} key={Sreservacion.id} className="p-4 rounded-md mb-4 bg-white duration-300 hover:scale-105 " >
                    <li key={Sreservacion.id} >
                      <p className="font-bold">Nombre: {Sreservacion.cliente.nombre || 'Dato no definido' }</p>
                      <p className="font-bold">Apellido: {Sreservacion.cliente.apellido || 'Dato no definido' }</p>
                      <p className="font-bold">Fecha: {new Date(Sreservacion.fecha).toDateString() || 'Dato no definido' }</p>
                      <p className="font-bold">Asistentes: {Sreservacion.total_asistentes || 'Dato no definido' }</p>
                      <p className="font-bold">VIP: {Sreservacion.vip ? 'Si' : 'No' || 'Dato no definido' }</p>
                    </li>
                  </Link>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservaciones;
