import { onSnapshot, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Reservaciones = () => {
  const [reservaciones, setReservaciones] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) navigate('/reserva');

  const getData = async () => {
    onSnapshot(collection(db, 'reservas'), (snapshot) => {
      setReservaciones(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    });
    // setUsers(snapshot.docs.map(doc => doc.data()))
  };
  
  useEffect(() => {
    getData();
  }, []);
  

  const deleteData = async (id) => {
    await deleteDoc(doc(db, 'reservas', id));    
    navigate('/reserva');
  }

  const reservacion = reservaciones.filter(reservacion => reservacion.id === id) || [];

  return (
    <div className='w-full h-full flex flex-col  ' >
      <h2 className='text-2xl font-bold font-bebas py-4 text-center' >Información sobre esta reserva: </h2>
      <div className='p-2 bg-white rounded-md text-gray-900 font-bold w-11/12 mx-auto md:w-4/12 ' >
        {
          reservacion.length !== 0 && reservacion.filter((set) => set.id === id).map((individual) => (
            <div className='w-full' key={individual?.id || 'No definido'} >
              <p>Nombre: {individual?.cliente?.nombre || 'No definido'}</p>
              <p>Apellido: {individual?.cliente?.apellido || 'No definido'}</p>
              <p>Fecha: {new Date(individual.fecha).toDateString()  || 'No definido'}</p>
              <p>Asistentes: {individual?.total_asistentes || 'No definido'}</p>
              <p>VIP: {individual?.vip ? 'Si' : 'No' || 'No definido'}</p>
              <div className='w-6/12 mx-auto flex justify-between items-center mt-4 ' >
                <Link className='p-2 rounded-md bg-gray-900 text-white font-bold '  to={'/reserva'} >
                  Regresar
                </Link>
                <button className='p-2 rounded-md bg-red-500 text-white font-bold ' onClick={() => deleteData(individual.id)} >
                  Eliminar
                </button>
              </div>
            </div>
            )
          )
        }
      </div>
    </div>
  )
};

export default Reservaciones;
