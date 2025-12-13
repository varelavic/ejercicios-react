import { Link } from 'react-router-dom';

function Title() {
    return (
        <nav className="text-white bg-gray-800 p-6 rounded-lg shadow-lg mb-4 flex flex-wrap gap-4 justify-center">
            <Link to="/">Home</Link>
            <Link to="/ejercicio1">Ejercicio 1</Link>
            <Link to="/ejercicio2">Ejercicio 2</Link>
            <Link to="/ejercicio3">Ejercicio 3</Link>
            <Link to="/ejercicio4">Ejercicio 4</Link>
            <Link to="/ejercicio5">Ejercicio 5</Link>
            <Link to="/ejercicio6">Ejercicio 6</Link>
            <Link to="/ejercicio7">Ejercicio 7</Link>
            <Link to="/ejercicio8">Ejercicio 8</Link>
            <Link to="/ejercicio9">Ejercicio 9</Link>
        </nav>
    );
}

export default Title;