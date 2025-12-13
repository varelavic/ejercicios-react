import Title from "../components/Title";

function Home() {
  return (
    <div>
      <Title />
      <div className="p-6 bg-gray-800 text-center text-white rounded-lg shadow-lg"> 
      <h1>Home</h1>
      <p>Bienvenido a la página principal.</p>
      </div>
    </div>
  );
}

export default Home;