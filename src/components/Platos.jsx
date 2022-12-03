const Platos = ({ nombre, precio, ing1, ing2, ing3, ing4 }) => {
  return (
    <div className="text-black bg-gray-200 p-4 duration-300 ease-out hover:scale-105 ">
      <h3 className="font-bold text-2xl"> {nombre} </h3>
      <p className="font-bold text-xl">Precio: ${precio} </p>
      <p className="font-bold text-xl">Ingredientes:</p>
      <ul>
        <li>{ing1}</li>
        <li>{ing2}</li>
        <li>{ing3}</li>
        <li>{ing4}</li>
      </ul>
    </div>
  );
};

export default Platos;
