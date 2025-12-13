import Title from "../components/Title";

function Ejercicio1() {

  return (
    <div>
      <Title />
      <div className="p-6 bg-gray-800 text-center text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">Ejercicio 1: Botón cambia-color</h1>
      <p>Haz clic en el botón para cambiar el color de fondo.</p>

      <button
        onClick={() => {
          document.body.style.backgroundColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      > Cambiar color de fondo 
      </button>
      </div>
    </div>
  );
}

export default Ejercicio1;